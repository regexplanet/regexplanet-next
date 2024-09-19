import React from 'react';
import { getEngineOrThrow } from '@/engines';

export default function Page({ params }: { params: { engine: string } }) {
    const engine = getEngineOrThrow(params.engine);
    return (
        <>
            <h1>{engine.short_name} Engine Current Status</h1>
        </>
    );
}