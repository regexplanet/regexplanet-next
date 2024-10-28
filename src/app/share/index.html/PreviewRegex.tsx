import { type TestInput } from "@regexplanet/common";
import { getWorkingEngines } from '@/engines';

type PreviewRegexProps = {
    theShare: TestInput;
}

export function PreviewRegex( {theShare}: PreviewRegexProps) {

    theShare.engine = theShare.engine || 'java';

    const options = theShare.options.map((option, index) => { return (<input type="hidden" name="option" key={`option_${index}`} value={option} />); });
    const inputs = theShare.inputs.map((input, index) => { return (<input type="hidden" key={`input_${index}`} name="input" value={input} />) });
    return (
        <>
                <div className="mb-3">
                    <label htmlFor="regex" className="form-label">Regular Expression</label>
                    <input type="text" className="form-control" id="regex" name="regex" defaultValue={theShare.regex} />
                </div>
                <div className="mb-3">
                    <label htmlFor="replacement" className="form-label">Replacement</label>
                    <input type="text" className="form-control" id="replacement" name="replacement" defaultValue={theShare.replacement} />
                </div>
                <div className="mb-3">
                    <label className="form-label d-block">Test with:</label>
            { getWorkingEngines().map((theEngine, index) => { return (
            <form action={`/advanced/${theEngine.handle}/index.html`} className="d-inline-block m-1" key={`form_${index}`} method="get">
                <input type="hidden" name="engine" value={theEngine.handle} />
                <input type="hidden" name="regex" value={theShare.regex} />
                <input type="hidden" name="replacement" value={theShare.replacement} />
                {options}
                {inputs}
                <button className={`btn ${theShare.engine == theEngine.handle ? 'btn-primary' : 'btn-outline-primary'}`}>{`${theEngine.short_name}`}</button>
            </form>) })}
            </div>
            <details className="mt-3"><summary>Raw data</summary><pre>{JSON.stringify(theShare, null, 2)}</pre></details>
        </>
    )
}
