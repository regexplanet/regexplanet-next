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
                <div className="card m-3 d-inline-block" key={`key${index}`} style={{ "width": "18rem" }}>
                    <img src={engine.logo_ar21} className="card-img-top" alt={`${engine.short_name} logo`} style={{ "width": "18rem", "height": "9rem" }} />
                    <div className="card-body p-0 border-top">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item fw-bold" key={`key${index}_title`}>{engine.short_name}</li>
                            <li className="list-group-item" key={`key${index}_help`}><a href={engine.help_url}>{engine.help_label}</a></li>
                            {engine.links && Object.keys(engine.links).map((key, linkindex) => (
                                <li className="list-group-item" key={`key${index}_${linkindex}`}><a href={engine.links[key]}>{key}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </>
    );
}



