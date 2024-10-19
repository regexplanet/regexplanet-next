'use client'
import React, { useState } from 'react';
import { TestInput } from '@/types/TestInput';
import { TestOutput } from '@/types/TestOutput';
import { TestResults } from '@/components/TestResults';
import { RegexEngine } from '@/engines/RegexEngine';
import OptionsInput from './OptionsInput';

type TestFormProps = {
    engine: RegexEngine;
    testUrl?: string;       // override for use during engine development
    testInput: TestInput;
}

async function runTest(test_url:string, testInput: TestInput): Promise<TestOutput> {

    const postData =
        `regex=${encodeURIComponent(testInput.regex)}` +
        `&replacement=${encodeURIComponent(testInput.replacement)}` +
        `&${testInput.option.map((option) => `option=${encodeURIComponent(option)}`).join("&")}` +
        `&${testInput.inputs.map((input) => `input=${encodeURIComponent(input)}`).join("&")}`;

    console.log("posting", test_url, postData);

    const response = await fetch(test_url, {
        method: "POST",
        body: postData,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        mode: "no-cors",
    });
    const data = await response.json();

    console.log("test results", data);

    return data as TestOutput;
}

export default function TestForm(props: TestFormProps) {
    const [testOutput, setTestOutput] = useState<TestOutput | null>();
    const [testInput, setTestInput] = useState<TestInput>(props.testInput);

    const inputRows = testInput.inputs.map((input, index) => (
        <div className="mb-2" key={`ikey${index}`}>
            {index <= 0 ? <label htmlFor={`row${index}`} className="col-sm-2 col-form-label">Inputs</label> : <></> }
            <input type="text" className="form-control" id={`input${index}`} name="input" defaultValue={input} />
        </div>
    ));
    console.log("render", testInput.inputs);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const localInput = formDataToTestInput( props.engine.handle, formData);
        const testUrl = props.testUrl || props.engine.test_url;
        console.log(testUrl, localInput);
        setTestInput(localInput);
        setTestOutput(null);
        if (testUrl) {
            setTestOutput(await runTest(testUrl, localInput));
        }
    };

    const onMoreInputs = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log(event);
        const form = event.currentTarget.form;
        if (!form) {
            return;
        }
        const formData = new FormData(form);
        const localInput = formDataToTestInput( props.engine.handle, formData);
        console.log("before more", localInput.inputs);
        for (let i = 0; i < 3; i++) {
            localInput.inputs.push('');
        }
        console.log("after more", localInput.inputs);

        setTestInput(localInput);
    }

    const onFewerInputs = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log(event);
        const form = event.currentTarget.form;
        if (!form) {
            return;
        }
        const formData = new FormData(form);
        const localInput = formDataToTestInput(props.engine.handle, formData);
        console.log("before fewer", localInput.inputs);
        localInput.inputs = localInput.inputs.filter(x => x.length > 0);
        while (localInput.inputs.length < 5) {
            localInput.inputs.push('');
        }
        setTestInput(localInput);
        console.log("after fewer", localInput.inputs);
    }

    return (
        <>  
            {
                props.testUrl ? <div className="alert alert-warning">Testing against {props.testUrl}!</div> : <></>
            }
            {(testInput.regex ?
                (testOutput ? <TestResults testOutput={testOutput} /> : <><h2>Results</h2><p>Loading...</p></>)
                : <></>)
            }
            <h2>Expression to test</h2>
            <form method="get" action="index.html" onSubmit={onSubmit}>
                { props.testUrl ? <input type="hidden" name="testurl" value={props.testUrl} /> : <></> }
                <div className="mb-3">
                    <label htmlFor="regex" className="form-label">Regular Expression</label>
                    <input type="text" className="form-control" id="regex" name="regex" defaultValue={testInput.regex} />
                </div>
                <div className="mb-3">
                    <label htmlFor="replacement" className="form-label">Replacement</label>
                    <input type="text" className="form-control" id="replacement" name="replacement" defaultValue={testInput.replacement} />
                </div>
                { props.engine.options.length > 0 ? <OptionsInput engine={props.engine} options={testInput.option} /> : <></> }
                <button type="submit" className="btn btn-primary">Test</button>
                {inputRows}
                <button type="submit" className="btn btn-primary">Test</button>
                <button className="ms-3 btn btn-outline-primary" onClick={onMoreInputs}>More inputs</button>
                { testInput.inputs.length > 5 ? <button className="ms-3 btn btn-outline-primary" onClick={onFewerInputs}>Fewer inputs</button> : null }
            </form>
        </>
    );
}

function formDataToTestInput(engineHandle:string, formData: FormData): TestInput {
    const retVal: TestInput = {
        engine: engineHandle,
        regex: formData.get('regex') as string,
        replacement: formData.get('replacement') as string,
        option: formData.getAll('option') as string[],
        inputs: formData.getAll('input') as string[]
    };
    return retVal;;
}