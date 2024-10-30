import { type TestOutput } from "@regexplanet/common";

type props = {
    testOutput: TestOutput;
    onClear: () => void;
};

export function TestResults({ onClear, testOutput }: props) {

    const messageClass = testOutput.success ? "alert alert-info" : "alert alert-danger";
    return (
        <>
            <h2 className="pt-3">Results <button className="btn btn-outline-primary btn-sm" onClick={onClear}>Clear</button></h2>
            { testOutput.message && testOutput.message != "OK" ? <div className={messageClass}>{testOutput.message}</div> : <></>}
            { testOutput.html ? <div dangerouslySetInnerHTML={{ __html: testOutput.html }} /> : <></> }
            <hr/>
        </>
    );
}
