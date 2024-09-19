import React from 'react';
import { getEngineOrThrow } from '@/engines';

export default function Page({ params }: { params: { engine: string } }) {
    const engine = getEngineOrThrow(params.engine);
    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <h1>{engine.short_name} Regular Expression Test Page</h1>
                <a className="btn btn-success" href={engine.help_url} target="_blank">{engine.help_label}</a>
            </div>
            <hr/>
            <h2>Expression to test</h2>
        </>
    );
}