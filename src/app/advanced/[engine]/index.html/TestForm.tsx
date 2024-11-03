'use client'
import React, { useEffect, useState } from 'react';
import { TestResults } from '@/components/TestResults';
import { RegexEngine } from '@/engines/RegexEngine';
import OptionsInput from './OptionsInput';
import { type TestInput, type TestOutput } from '@regexplanet/common';
import { useRouter } from 'next/navigation';
import { formDataToTestInput } from '@/functions/formDataToTestInput';
import { runTestPage } from './runTestPage';
import Link from 'next/link';

type TestFormProps = {
    engine: RegexEngine;
    testUrl: string;
    testInput: TestInput;
    testOutput: TestOutput|null;
    inputRows: React.JSX.Element[];
}

const pendingTestOutput: TestOutput = {
    success: true,
    html: `<p><img src="/images/spinner.gif" alt="spinner" /> Running, please wait...</p>`,
};

function testInputToSearchParams(testInput: TestInput): URLSearchParams {
    const searchParams = new URLSearchParams();
    searchParams.set('regex', testInput.regex);
    searchParams.set('replacement', testInput.replacement);
    testInput.options.forEach(option => searchParams.append('option', option));
    testInput.inputs.forEach(input => searchParams.append('input', input));
    return searchParams;
}

function setTestInput(testInput: TestInput): string {
    const searchParams = new URLSearchParams();
    searchParams.set('regex', testInput.regex);
    searchParams.set('replacement', testInput.replacement);
    testInput.options.forEach(option => searchParams.append('option', option));
    testInput.inputs.forEach(input => searchParams.append('input', input));

    const url = new URL(window.location.href);
    url.search = searchParams.toString();

    //window.history.pushState({}, '', url.toString());
    return url.toString();
}

export default function TestForm(props: TestFormProps) {
    const [testOutput, setTestOutput] = useState<TestOutput | null>(props.testOutput);   
    const router = useRouter()
    //const [testInput, setTestInput] = useState<TestInput>(props.testInput);
    const testInput = props.testInput;

    const inputRows = props.inputRows;

    const onClearResults = () => {
        setTestOutput(null);
    };
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const localInput = formDataToTestInput( props.engine.handle, formData);
        console.log(props.testUrl, localInput);
        setTestInput(localInput);
        setTestOutput(pendingTestOutput);
        const newTestOutput = await runTestPage(props.testUrl, localInput);
        console.log("newTestOutput", newTestOutput);
        setTestOutput(newTestOutput);
    };
/*
    const onSubmit = () => {
        setTestOutput(pendingTestOutput);
    }
*/
    
    useEffect(() => {
        async function runTestEffect() {
        if (props.testInput.regex) {
            const testUrl = props.testUrl || props.engine.test_url;
            if (testUrl) {
                const newTestOutput = await runTestPage(testUrl, props.testInput);
                setTestOutput(newTestOutput);
            }
        }}
        if (props.testInput.regex) { setTestOutput(pendingTestOutput) };
        runTestEffect();
    }, [props.testInput, props.testUrl, props.engine.test_url]);

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

        router.replace(setTestInput(localInput));
        router.refresh();
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
        console.log("after fewer", localInput.inputs);
        router.replace(setTestInput(localInput));
        router.refresh();
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
                props.testUrl != props.engine.test_url ? <div className="alert alert-warning">Testing against {props.testUrl}!</div> : <></>
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
                <button className="ms-3 btn btn-outline-primary scripting-required" onClick={onMoreInputs}>More inputs</button>
                { testInput.inputs.length > 5 ? <button className="ms-3 btn btn-outline-primary scripting-required" onClick={onFewerInputs}>Fewer inputs</button> : null }
                <button type="submit" className="btn btn-outline-primary float-end scripting-required" onClick={onSwitchEngines}>Switch Engines</button>
                <Link className="btn btn-outline-primary float-end noscript-only" href={`/advanced/select.html?${testInputToSearchParams(testInput).toString()}`}>Switch Engines</Link>
            </form>
        </>
    );
}

