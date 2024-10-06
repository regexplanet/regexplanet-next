'use client'
/* eslint-disable @next/next/no-img-element */

import React, { useCallback } from 'react';
import { getEngines } from '@/engines';
import Link from 'next/link';
import fetchJsonp from 'fetch-jsonp';
import { EngineStatus } from '@/types/EngineStatus';


function getHost(status_url: string|undefined) {
    if (!status_url) {
        return <i>(not configured)</i>
    }
    const urlObj = new URL(status_url);
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
                <td className="d-none d-lg-table-cell" />
            </>
        );
    }

    if (status.success === false) {
        return (
            <>
                <td><img src="/images/exclamation-red.png" alt="error" /> Error</td>
                <td />
                <td className="d-none d-lg-table-cell"/>
            </>
        );
    }

    if (!status.time_millis) {
        return (
            <>
                <td><img src="/images/exclamation-red.png" alt="why no time?" /> No time?!?</td>
                <td />
                <td className="d-none d-lg-table-cell" />
            </>
        );
    }

    const icon_url = status.time_millis < SLOW_TIME_MILLIS ? "/images/tick.png" : "/images/exclamation-frame.png";
    const text = status.time_millis < SLOW_TIME_MILLIS ? "Success" : "Slow";
    const alt_text = status.time_millis < SLOW_TIME_MILLIS ? `Success (${status.time_millis} ms)` : `Slow (${status.time_millis} ms)`;

    return (
        <>
            <td>
                <img src={icon_url} alt={alt_text} title={alt_text} /> {text}
            </td>
            <td>{status.version}</td>
            <td className="d-none d-lg-table-cell">{status.time_millis}</td>
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
        getEngines().filter((engine) => engine.status_url).map((engine, index) => {
            fetchOneResult(engine?.status_url || "")    // hack since TS doesn't understand the filter above
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
                        <th className="d-none d-lg-table-cell">Time (ms)</th>
                        <th className="d-none d-lg-table-cell">Hosted at</th>
                    </tr>
                </thead>
                <tbody>
                    {getEngines().filter(engine => engine.status_url).map((engine, index) => (
                        <tr key={engine.handle}>
                            <td>
                                <img className="pe-2" src={engine.logo_icon} alt={engine.short_name} style={{ "height": "1.25em" }} />
                                <Link href={`/advanced/${engine.handle}/index.html`} >{engine.short_name}</Link>
                            </td>
                            {EngineStatusColumns(results[index])}
                            <td className="d-none d-lg-table-cell">{getHost(engine.status_url)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={onRefresh}>Refresh</button>
        </>
    );
}



