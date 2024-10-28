'use client'
import React, { useState } from 'react';
import { TestResults } from '@/components/TestResults';
import { RegexEngine } from '@/engines/RegexEngine';
import OptionsInput from './OptionsInput';
import { runTest as runBrowserTest, type TestInput, type TestOutput } from '@regexplanet/common';
import { useRouter } from 'next/navigation';
import { formDataToTestInput } from '@/functions/formDataToTestInput';

type TestFormProps = {
    engine: RegexEngine;
    testUrl?: string;       // override for use during engine development
    testInput: TestInput;
}

function setTestInput(testInput: TestInput) {
    const searchParams = new URLSearchParams();
    searchParams.set('regex', testInput.regex);
    searchParams.set('replacement', testInput.replacement);
    testInput.options.forEach(option => searchParams.append('option', option));
    testInput.inputs.forEach(input => searchParams.append('input', input));

    const url = new URL(window.location.href);
    url.search = searchParams.toString();
    window.history.pushState({}, '', url.toString());
}

async function runTest(test_url:string, testInput: TestInput): Promise<TestOutput> {

    console.log("running test", testInput);
    if (!testInput || !testInput.regex) {
        return {
            success: false,
            message: "Please enter a regular expression to test",
        };
    }

    if (test_url === 'javascript:runBrowserTest') {
        return runBrowserTest(testInput);
    }

    const postData =
        `regex=${encodeURIComponent(testInput.regex)}` +
        `&replacement=${encodeURIComponent(testInput.replacement)}` +
        `&${testInput.options.map((option) => `option=${encodeURIComponent(option)}`).join("&")}` +
        `&${testInput.inputs.map((input) => `input=${encodeURIComponent(input)}`).join("&")}`;

    console.log("posting", test_url, postData);

    const response = await fetch(test_url, {
        method: "POST",
        body: postData,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        //mode: "no-cors",
    });
    console.log("response", response);
    const data = await response.json();

    console.log("test results", data);

    return data as TestOutput;
}

export default function TestForm(props: TestFormProps) {
    const [testOutput, setTestOutput] = useState<TestOutput | null>();
    const router = useRouter()
    //const [testInput, setTestInput] = useState<TestInput>(props.testInput);
    const testInput = props.testInput;

    const inputRows = testInput.inputs.map((input, index) => (
        <div className="mb-2" key={`ikey${index}`}>
            <input type="text" className="form-control" id={`input${index}`} name="input" defaultValue={input} />
        </div>
    ));
    console.log("render", testInput.inputs);

    const onClearResults = () => {
        setTestOutput(null);
    };

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const localInput = formDataToTestInput( props.engine.handle, formData);
        const testUrl = props.testUrl || props.engine.test_url;
        console.log(testUrl, localInput);
        setTestInput(localInput);
        setTestOutput({ success: true, message: "Loading..."});
        if (testUrl) {
            const newTestOutput = await runTest(testUrl, localInput);
            console.log("newTestOutput", newTestOutput);
            setTestOutput(newTestOutput);
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
    };

    const onSwitchEngines = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const form = event.currentTarget.form;
        if (!form) {
            return;
        }
        const formData = new FormData(form);
        const localInput = formDataToTestInput(props.engine.handle, formData);

        const searchParams = new URLSearchParams();
        searchParams.set('engine', props.engine.handle);
        searchParams.set('regex', localInput.regex);
        searchParams.set('replacement', localInput.replacement);
        localInput.options.forEach(option => searchParams.append('option', option));
        localInput.inputs.forEach(input => searchParams.append('input', input));

        const url = new URL('/advanced/select.html', window.location.href);
        url.search = searchParams.toString();
        router.push(url.toString());
    };

    return (
        <>  
            {
                props.testUrl ? <div className="alert alert-warning">Testing against {props.testUrl}!</div> : <></>
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
                { props.engine.options.length > 0 ? <OptionsInput engine={props.engine} options={testInput.options} /> : <></> }
                <button type="submit" className="btn btn-primary">Test</button>
                {
                    (testOutput ? <TestResults onClear={onClearResults} testOutput={testOutput} /> : <></>)
                    
                }
                <h2 className="pt-3">Inputs</h2>
                {inputRows}
                <button type="submit" className="btn btn-primary">Test</button>
                <button className="ms-3 btn btn-outline-primary" onClick={onMoreInputs}>More inputs</button>
                { testInput.inputs.length > 5 ? <button className="ms-3 btn btn-outline-primary" onClick={onFewerInputs}>Fewer inputs</button> : null }
                <button type="submit" className="btn btn-outline-primary float-end" onClick={onSwitchEngines}>Switch Engines</button>
            </form>
        </>
    );
}

