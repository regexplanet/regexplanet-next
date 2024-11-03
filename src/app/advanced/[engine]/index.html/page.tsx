import React from 'react';
import { getEngine } from '@/engines';
import { ShareLinks } from '@/components/ShareLinks';
import { notFound } from 'next/navigation';
import TestForm from './TestForm';
import { type TestInput } from '@regexplanet/common';
import { HelpButton } from '@/components/HelpButton';
import { cleanupSearchParam } from '@/functions/cleanupSearchParam';
import { cleanupSearchParamArray } from '@/functions/cleanupSearchParamArray';
import { runTestPage } from './runTestPage';

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

export default async function Page({
    params,
    searchParams,
}: {
    params: { engine: string }
    searchParams: { [key: string]: string | string[] | undefined }
}) {
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

    const testUrl = cleanupSearchParam(searchParams["testurl"]) || engine.test_url || `javascript:runBrowserTest`;

    const testInput:TestInput = {
        engine: engine.handle,
        regex: cleanupSearchParam(searchParams["regex"]),
        replacement: cleanupSearchParam(searchParams["replacement"]),
        options: cleanupSearchParamArray(searchParams["option"]),
        inputs: cleanupSearchParamArray(searchParams["input"]),
    }

    while (testInput.inputs.length < 5) {
        testInput.inputs.push("");
    }

    const testOutput = testInput.regex ? await runTestPage(testUrl, testInput) : null;

    const inputRows = testInput.inputs.map((input, index) => (
        <div className="mb-2" key={`ikey${index}`}>
            <input type="text" className="form-control" id={`input${index}`} name="input" defaultValue={input} />
        </div>
    ));
    console.log("render", testInput.inputs);


    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <h1>{engine.short_name} Regular Expression Test Page</h1>
                <HelpButton engine={engine} />
            </div>
            <ShareLinks url={`https://regexplanet.com/advanced/${engine.handle}/index.html`} text={`Test your ${engine.short_name} regular expression`} />
            <hr />
            {flash}
            <TestForm engine={engine} testUrl={testUrl} testInput={testInput} testOutput={testOutput} inputRows={inputRows}/>
        </>
    );
}