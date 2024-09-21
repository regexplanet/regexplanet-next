'use client';
import { getEngine } from "@/engines";
import { notFound } from "next/navigation";
import { useFormStatus } from "react-dom";

export default function Page({ params }: { params: { engine: string } }) {
    const { pending, data, method } = useFormStatus();

    const engine = getEngine(params.engine);
    if (!engine) {
        return notFound();
    }


    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <h1>{engine.short_name} Test Results</h1>
                <a className="btn btn-success" href={engine.help_url} target="_blank">{engine.help_label}</a>
            </div>
            <p>Results will be displayed here.</p>
            <p>{pending} {method}</p>
            <pre>{JSON.stringify(params, null, 2)}</pre>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    );
}