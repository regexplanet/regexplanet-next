'use client';
/* eslint-disable @next/next/no-img-element */

import React, { useCallback } from 'react';
import { getEngines } from '@/engines';

export default function Page() {

    return (
        <>
            <h1>Official Documentation Links</h1>
            <hr />
                    {getEngines().map((engine, index) => (
                        <>
                        <h2 key={engine.handle}>{engine.short_name}</h2>
                        <ul>
                            <li><a href={engine.help_url}>{engine.help_label}</a></li>
                            {engine.links && Object.keys(engine.links).map((key) => (
                                <li key={key}><a href={engine.links[key]}>{key}</a></li>
                            ))}
                        </ul>
                        </>
                    ))}
        </>
    );
}



