import { RegexEngine, RegexOption } from "@/engines/RegexEngine";
import { PiArrowSquareOut } from "react-icons/pi";


type OptionInputProps = {
    engine: RegexEngine;
    options: string[];
};

function getBackendValue(option: RegexOption): string {

    if (option.legacyCode) {
        return option.legacyCode;
    }
    return option.code;
}

export default function OptionsInput({ engine, options: optionsOrNull }: OptionInputProps) {

    const options = optionsOrNull || [];

    const optionCheckboxes = engine.options.map((option) => {
        const optionValue = getBackendValue(option);

        return (
            <div className="form-check" key={option.code}>
                <input className="form-check-input" type="checkbox" id={`option-${option.code}`} name="option" value={optionValue} defaultChecked={options.includes(option.code)} />
                <label className="form-check-label" htmlFor={`option-${option.code}`}>{option.description} (<code>{option.code}</code>)</label>
            </div>
        )
    });

    return (
        <div className="">
            <details>
                <summary>
            <label className="form-label">Options <small><a href="options.html" target="_new">Help<PiArrowSquareOut className="ms-2" /></a></small></label>
                </summary>
            <div className="row ms-3 mb-3">
                {optionCheckboxes}
            </div>
            </details>
        </div>
    );
}
