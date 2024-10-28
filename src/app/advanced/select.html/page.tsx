'use client';
import { type TestInput } from "@regexplanet/common";
import { getWorkingEngines } from '@/engines';
import { cleanupSearchParam } from "@/functions/cleanupSearchParam";
import { cleanupSearchParamArray } from "@/functions/cleanupSearchParamArray";
import { formDataToTestInput } from "@/functions/formDataToTestInput";
import { testInputToSearchParams } from "@/functions/testInputToSearchParams";
import { useRouter } from "next/navigation";

export default function SelectEnginePage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
    const router = useRouter();

    const testInput: TestInput = {
        engine: cleanupSearchParam(searchParams["engine"], 'nodejs'),
        regex: cleanupSearchParam(searchParams["regex"]),
        replacement: cleanupSearchParam(searchParams["replacement"]),
        options: cleanupSearchParamArray(searchParams["option"]),
        inputs: cleanupSearchParamArray(searchParams["input"]),
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const testInput = formDataToTestInput(formData.get('engine') as string, formData);
        const url = `/advanced/${testInput.engine}/index.html?${testInputToSearchParams(testInput).toString()}`;
        console.log('router.push', url);
        router.push(url);
    };

    const options = testInput.options.map((option, index) => { return (<input type="hidden" name="option" key={`option_${index}`} value={option} />); });
    const inputs = testInput.inputs.map((input, index) => { return (<input type="hidden" key={`input_${index}`} name="input" value={input} />) });
    return (
        <>
            <h1>Select Engine</h1>
                <div className="mb-3">
                    <label htmlFor="regex" className="form-label">Regular Expression</label>
                    <input type="text" className="form-control" id="regex" name="regex" defaultValue={testInput.regex} />
                </div>
                <div className="mb-3">
                    <label htmlFor="replacement" className="form-label">Replacement</label>
                    <input type="text" className="form-control" id="replacement" name="replacement" defaultValue={testInput.replacement} />
                </div>
                <div className="mb-3">
                    <label className="form-label d-block">Test with:</label>
            { getWorkingEngines().map((theEngine, index) => { return (
            <form action={`/advanced/${theEngine.handle}/index.html`} className="d-inline-block m-1" key={`form_${index}`} method="get" onSubmit={onSubmit}>
                <input type="hidden" name="engine" value={theEngine.handle} />
                <input type="hidden" name="regex" value={testInput.regex} />
                <input type="hidden" name="replacement" value={testInput.replacement} />
                {options}
                {inputs}
                <button className={`btn ${testInput.engine == theEngine.handle ? 'btn-primary' : 'btn-outline-primary'}`}>{`${theEngine.short_name}`}</button>
            </form>) })}
            </div>
            <details className="mt-3"><summary>Raw data</summary><pre>{JSON.stringify(testInput, null, 2)}</pre></details>
        </>
    )
}
