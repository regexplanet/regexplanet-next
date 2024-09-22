import React from 'react';
import { getEngine } from '@/engines';
import { ShareLinks } from '@/components/ShareLinks';
import { notFound } from 'next/navigation';
import TestForm from './TestForm';

export async function generateMetadata({ params }: { params: { engine: string } }) {
    const engine = getEngine(params.engine);
    if (!engine) {
        return {};
    }

    return {
        title: `Test your ${engine.short_name} regular expression - RegexPlanet`,
        description: `Online testing for ${engine.short_name} regular expressions.`,
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

    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <h1>{engine.short_name} Regular Expression Test Page</h1>
                <a className="btn btn-success" href={engine.help_url} target="_blank">{engine.help_label}</a>
            </div>
            <ShareLinks url={`https://regexplanet.com/advanced/${engine.handle}/index.html`} text={`Test your ${engine.short_name} regular expression`} />
            <hr />
            {flash}
            <TestForm engine={engine} />
        </>
    );
}