/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { getEngines } from '@/engines';
import { EngineButton } from '@/components/EngineButton';

export default function Page() {

    const buttons = getEngines().filter(engine => engine.javascript).map((engine) => {
        return ( <EngineButton key={engine.handle} engine={engine} />);
    });


    return (
        <>
            <h1>JavaScript Regex Engines</h1>
            <hr />
            <div className="alert alert-info" role="alert">There are multiple JavaScript regular expression engines available. Each engine has its own unique features and capabilities.</div>
            <div className="row">
                <div className="col d-flex flex-wrap justify-content-center">
                    {buttons}
                </div>
            </div>
        </>
    );
}