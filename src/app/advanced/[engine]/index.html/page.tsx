import React from 'react';
import { getEngine } from '@/engines';
import { ShareLinks } from '@/components/ShareLinks';
import { notFound } from 'next/navigation';
import TestForm from './TestForm';
//import { testRegexAction } from './testRegexAction';
//import OptionsInput from './OptionsInput';
import { TestInput } from '@/types/TestInput';

export async function generateMetadata({ params }: { params: { engine: string } }) {
    const engine = getEngine(params.engine);
    if (!engine) {
        return {};
    }

    return {
        title: `${engine.short_name} regex testing - RegexPlanet`,
        description: `Online testing for ${engine.short_name} (${engine.description}) regular expressions.`,
    }
}

export default function Page({ params }: { params: { engine: string } }) {
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

    const testInput:TestInput = {
        engine: engine.handle,
        regex: '',
        replacement: '',
        option: [],
        inputs: ["", "", "", "", ""],
    }

    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <h1>{engine.short_name} Regular Expression Test Page</h1>
                <a className="btn btn-success" href={engine.help_url} target="_blank">{engine.help_label}</a>
            </div>
            <ShareLinks url={`https://regexplanet.com/advanced/${engine.handle}/index.html`} text={`Test your ${engine.short_name} regular expression`} />
            <hr />
            {flash}
            <TestForm engine={engine} testInput={testInput} />
        </>
    );
    /*
    const testRegexEngineAction = testRegexAction.bind(null, engine.handle);

    const inputs = ["", "", "", "", ""];

    const inputRows = inputs.map((input, index) => (
        <div className="mb-2" key={`key${index}`}>
            {index <= 0 ? <label htmlFor={`row${index}`} className="col-sm-2 col-form-label">Inputs</label> : <></>}
            <input type="text" className="form-control" id={`input${index}`} name="input" defaultValue={input} />
        </div>
    ));

    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <h1>{engine.short_name} Regular Expression Test Page</h1>
                <a className="btn btn-success" href={engine.help_url} target="_blank">{engine.help_label}</a>
            </div>
            <ShareLinks url={`https://regexplanet.com/advanced/${engine.handle}/index.html`} text={`Test your ${engine.short_name} regular expression`} />
            <hr />
            {flash}
            <h2>Expression to test</h2>
            <form method="post" action={testRegexEngineAction}>
                <div className="mb-3">
                    <label htmlFor="regex" className="form-label">Regular Expression</label>
                    <input type="text" className="form-control" id="regex" name="regex" />
                </div>
                <div className="mb-3">
                    <label htmlFor="replacement" className="form-label">Replacement</label>
                    <input type="text" className="form-control" id="replacement" name="replacement" />
                </div>
                {engine.options.length > 0 ? <OptionsInput engine={engine} options={[]} /> : <></>}
                <button type="submit" className="btn btn-primary">Test</button>
                {inputRows}
                <button type="submit" className="btn btn-primary">Test</button>
            </form>
        </>
    );
    */
}