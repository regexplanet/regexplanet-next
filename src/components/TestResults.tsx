import { TestOutput } from "@/types/TestOutput";

type props = {
    testOutput: TestOutput;
};

export function TestResults({ testOutput }: props) {

    const messageClass = testOutput.success ? "alert alert-info" : "alert alert-danger";
    return (
        <>
            <h2>Results</h2>
            { testOutput.message ? <div className={messageClass}>{testOutput.message}</div> : <></>}
            { testOutput.html ? <div dangerouslySetInnerHTML={{ __html: testOutput.html }} /> : <></> }
            <hr/>
        </>
    );
}
