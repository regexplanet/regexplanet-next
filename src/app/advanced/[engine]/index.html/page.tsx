'use client'
import React, { useState } from 'react';
import { getEngine, runTest } from '@/engines';
import { ShareLinks } from '@/components/ShareLinks';
import { notFound } from 'next/navigation';
import { TestInput } from '@/types/TestInput';
import { TestOutput } from '@/types/TestOutput';
import { TestResults } from '@/components/TestResults';

export default function Page({ params }: { params: { engine: string } }) {
    const [testOutput, setTestOutput] = useState<TestOutput | null>();
    const [testInput, setTestInput] = useState<TestInput | null>();
    const engine = getEngine(params.engine);
    if (!engine) {
        return notFound();
    }

    let flash = <></>;
    if (engine.level === 'alpha') {
        flash = <div className="alert alert-warning" role="alert">
            Online testing with {engine.short_name} is not complete - alpha testing only!
        </div>;
    } else if (engine.level === 'beta') {
        flash = <div className="alert alert-warning" role="alert">
            Online testing with {engine.short_name} is still in beta.
        </div>;
    }

    const inputs = ["", "", "", "", ""];

    const inputRows = inputs.map((input, index) => (
        <div className="mb-3 col-6 row" key={`key${index}`}>
            <label htmlFor={`row${index}`} className="col-sm-2 col-form-label">Input {index + 1}</label>
            <div className="col-sm-10">
                <input type="text" className="form-control" id={`input${index}`} name="input" />
            </div>
        </div>
    ));

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const localInput: TestInput = {
            regex: formData.get('regex') as string,
            replacement: formData.get('replacement') as string,
            options: formData.get('options') as string,
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
            <div className="d-flex justify-content-between align-items-center">
                <h1>{engine.short_name} Regular Expression Test Page</h1>
                <a className="btn btn-success" href={engine.help_url} target="_blank">{engine.help_label}</a>
            </div>
            <ShareLinks url={`https://regexplanet.com/advanced/${engine.handle}/index.html`} text={`Test your ${engine.short_name} regular expression`} />
            <hr />
            {flash}
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
                <div className="mb-3">
                    <label htmlFor="options" className="form-label">Options</label>
                    <input type="text" className="form-control" id="options" name="options" />
                </div>
                <button type="submit" className="btn btn-primary">Test</button>
                {inputRows}
                <button type="submit" className="btn btn-primary">Test</button>
            </form>
        </>
    );
}