import React, { useState } from 'react';
import { getEngine, runTest } from '@/engines';
import { ShareLinks } from '@/components/ShareLinks';
import { notFound } from 'next/navigation';
import { TestInput } from '@/types/TestInput';
import { TestOutput } from '@/types/TestOutput';
import { TestResults } from '@/components/TestResults';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { engine: string } }) {
    const engine = getEngine(params.engine);
    if (!engine) {
        return {};
    }

    return {
        title: `Options for ${engine.short_name} regular expressions - RegexPlanet`,
        description: `Options (aka flags) that you can set for ${engine.short_name} regular expressions.`,
    }
}

export default function Page({ params }: { params: { engine: string } }) {
    const engine = getEngine(params.engine);
    if (!engine) {
        return notFound();
    }

    return (
        <>
            <h1>Options for {engine.short_name} Regular Expressions</h1>
            <hr />
            <div className="alert alert-info" role="alert">Regular expressions can have options (also known as flags) that modify their behavior. Each engine supports a different set of options.</div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Option</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(engine.options).map((option) => (
                        <tr key={option[0]}>
                            <td>{option[0]}</td>
                            <td>{option[1]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
