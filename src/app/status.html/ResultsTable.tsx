'use client'
/* eslint-disable @next/next/no-img-element */

import React, { useCallback } from 'react';
import { getEngines } from '@/engines';
import Link from 'next/link';
import fetchJsonp from 'fetch-jsonp';
import { EngineStatus } from '@/types/EngineStatus';


function getHost(test_url: string) {
    const urlObj = new URL(test_url);
    if (urlObj.host.endsWith(".gcr.regexplanet.com")) {
        return <Link href="https://cloud.google.com/run/">Cloud Run</Link>;
    }
    if (urlObj.host.endsWith(".appspot.com")) {
        return <Link href="https://code.google.com/appengine/">AppEngine</Link>;
    }
    if (urlObj.host.endsWith(".herokuapp.com")) {
        return <Link href="https://www.heroku.com/">Heroku</Link>;
    }
    return <>
        {urlObj.host}
    </>
}

const SLOW_TIME_MILLIS = 10 * 1000;

function EngineStatusColumns(status: EngineStatus | undefined) {
    if (!status) {
        return (
            <>
                <td><img src="/images/spinner.gif" alt="loading" /></td>
                <td />
                <td />
            </>
        );
    }
    if (!status.version) {
        return (
            <>
                <td><img src="/images/cross-circle.png" alt="down" /> Down</td>
                <td />
                <td />
            </>
        );
    }

    if (status.success === false) {
        return (
            <>
                <td><img src="/images/exclamation-red.png" alt="error" /> Error</td>
                <td />
                <td />
            </>
        );
    }

    if (!status.time_millis) {
        return (
            <>
                <td><img src="/images/exclamation-red.png" alt="why no time?" /> No time?!?</td>
                <td />
                <td />
            </>
        );
    }

    const icon_url = status.time_millis < SLOW_TIME_MILLIS ? "/images/tick.png" : "/images/exclamation-frame.png";
    const text = status.time_millis < SLOW_TIME_MILLIS ? "Success" : "Slow";

    return (
        <>
            <td>
                <img src={icon_url} alt={text} /> {text}
            </td>
            <td>{status.version}</td>
            <td>{status.time_millis}</td>
        </>
    );
}

async function fetchOneResult(url: string): Promise<EngineStatus> {
    console.log(`Fetching ${url}`);
    const start = Date.now();
    try {
        const response = await fetchJsonp(url);
        const elapsed = Date.now() - start;
        if (!response.ok) {
            return { success: false, time_millis: elapsed };
        }
        const data = await response.json();
        console.log('fetchone success', url, data);
        return {
            success: data.success,
            version: data.version,
            time_millis: elapsed,
        };
    } catch (err) {
        console.log('fetch error', err);
        return {
            success: false,
            version: undefined,
            time_millis: Date.now() - start,
        };
    }
}

export function ResultsTable() {

    const [results, setState] = React.useState<EngineStatus[]>([]);

    const fetchAllResults = useCallback(() => {
        console.log("Fetching all results");
        getEngines().map((engine, index) => {
            fetchOneResult(engine.status_url)
                .then((result) => {
                    console.log(`Got result for ${engine.short_name}`, result, index);
                    setState(prevResult => {
                        console.log("Setting state: before", prevResult);
                        const newResult = [...prevResult];
                        newResult[index] = result;
                        console.log("Setting state: after", newResult);
                        return newResult;
                    });
                });
        });
    }, []);

    React.useEffect(() => {
        console.log("useEffect");
        fetchAllResults();
    }, [fetchAllResults]);

    const onRefresh = () => {
        console.log("Refreshing");
        setState([]);
        fetchAllResults();
    };

    console.log("Rendering", JSON.stringify(results));
    return (
        <>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Engine</th>
                        <th>Status</th>
                        <th>Version</th>
                        <th>Time (ms)</th>
                        <th>Hosted at</th>
                    </tr>
                </thead>
                <tbody>
                    {getEngines().map((engine, index) => (
                        <tr key={engine.handle}>
                            <td>
                                <img className="pe-2" src={engine.logo_icon} alt={engine.short_name} style={{ "height": "1.25em" }} />
                                <Link href={`/advanced/${engine.handle}/index.html`} >{engine.short_name}</Link>
                            </td>
                            {EngineStatusColumns(results[index])}
                            <td>{getHost(engine.test_url)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={onRefresh}>Refresh</button>
        </>
    );
}



