import { TestInput } from '@/types/TestInput';
import { SubmitButton } from '@/components/SubmitButton';
import { getWorkingEngine, getWorkingEngineOrThrow } from '@/engines';

type PreviewRegexProps = {
    theShare: TestInput;
}

export function PreviewRegex( {theShare}: PreviewRegexProps) {
    const engineCode = theShare.engine;
    let theEngine = getWorkingEngine(engineCode);
    if (!theEngine) {
        theEngine = getWorkingEngineOrThrow("java");
    }
    return (
        <>
            <form action={`/advanced/${theEngine.handle}/index.html`} className="" method="post">
                <div className="mb-3">
                    <label htmlFor="regex" className="form-label">Regular Expression</label>
                    <input type="text" className="form-control" id="regex" name="regex" defaultValue={theShare.regex} />
                </div>
                <div className="mb-3">
                    <label htmlFor="replacement" className="form-label">Replacement</label>
                    <input type="text" className="form-control" id="replacement" name="replacement" defaultValue={theShare.replacement} />
                </div>
                <SubmitButton>{`Test with ${theEngine.short_name}`}</SubmitButton>
            </form>
            <details className="mt-3"><summary>Raw data</summary><pre>{JSON.stringify(theShare, null, 2)}</pre></details>
        </>
    )
}
