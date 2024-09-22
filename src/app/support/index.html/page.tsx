/* eslint-disable @next/next/no-img-element */

import { Metadata } from 'next';
import React from 'react';
import { getEngines } from '@/engines';

export const metadata: Metadata = {
    title: "Documentation - RegexPlanet",
    description: `Links to the official documentation for regular expressions in ${getEngines().map(x => x.short_name).join(', ')}.`,
}; 

export default function Page() {

    return (
        <>
            <h1>Official Documentation Links</h1>
            <hr />
                    {getEngines().map((engine, index) => (
                        <>
                        <h2 key={`key${index}`}>{engine.short_name}</h2>
                        <ul>
                            <li><a href={engine.help_url}>{engine.help_label}</a></li>
                            {engine.links && Object.keys(engine.links).map((key) => (
                                <li key={`key${index}_${key}`}><a href={engine.links[key]}>{key}</a></li>
                            ))}
                        </ul>
                        </>
                    ))}
        </>
    );
}



