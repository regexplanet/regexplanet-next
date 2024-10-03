'use client'
import React, { useState } from 'react';
import { runTest } from '@/engines';
import { TestInput } from '@/types/TestInput';
import { TestOutput } from '@/types/TestOutput';
import { TestResults } from '@/components/TestResults';
import { RegexEngine } from '@/engines/RegexEngine';
import OptionsInput from './OptionsInput';

type TestFormProps = {
    engine: RegexEngine;
}

export default function TestForm({ engine }: TestFormProps) {
    const [testOutput, setTestOutput] = useState<TestOutput | null>();
    const [testInput, setTestInput] = useState<TestInput | null>();

    const inputs = ["", "", "", "", ""];

    const inputRows = inputs.map((input, index) => (
        <div className="mb-2" key={`key${index}`}>
            {index <= 0 ? <label htmlFor={`row${index}`} className="col-sm-2 col-form-label">Inputs</label> : <></> }
            <input type="text" className="form-control" id={`input${index}`} name="input" defaultValue={input} />
        </div>
    ));

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const localInput: TestInput = {
            engine: engine.handle,
            regex: formData.get('regex') as string,
            replacement: formData.get('replacement') as string,
            option: formData.getAll('option') as string[],
            inputs: formData.getAll('input') as string[]
        };
        console.log(localInput);
        setTestInput(localInput);
        setTestOutput(null);
        setTestOutput(await runTest(engine, formData));

        //window.history.pushState(null, "", `/advanced/${engine.handle}/results.html`);
    };

    return (
        <>
            {(testInput ?
                (testOutput ? <TestResults testOutput={testOutput} /> : <><h2>Results</h2><p>Loading...</p></>)
                : <></>)
            }
            <h2>Expression to test</h2>
            <form method="post" action="results.html" onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="regex" className="form-label">Regular Expression</label>
                    <input type="text" className="form-control" id="regex" name="regex" />
                </div>
                <div className="mb-3">
                    <label htmlFor="replacement" className="form-label">Replacement</label>
                    <input type="text" className="form-control" id="replacement" name="replacement" />
                </div>
                { engine.options.length > 0 ? <OptionsInput engine={engine} options={[]} /> : <></> }
                <button type="submit" className="btn btn-primary">Test</button>
                {inputRows}
                <button type="submit" className="btn btn-primary">Test</button>
            </form>
        </>
    );
}