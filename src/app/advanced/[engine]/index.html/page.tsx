import React from 'react';
import { getEngineOrThrow } from '@/engines';
import { ShareLinks } from '@/components/ShareLinks';

export default function Page({ params }: { params: { engine: string } }) {
    const engine = getEngineOrThrow(params.engine);

    let flash = <></>;
    if (engine.level === 'alpha') {
        flash = <div className="alert alert-warning" role="alert">
                Online testing with {engine.short_name} is not complete - alpha testing only!
            </div>;
    } else if (engine.level === 'beta') {
        flash = <div className="alert alert-warning" role="alert">
                Online testing with {engine.short_name} is still in beta.
            </div>;
    }

    const inputs = [ "", "", "", "", "" ];

    const inputRows = inputs.map((input, index) => (
        <div className="mb-3 col-6 row" key={`key${index}`}>
            <label htmlFor={`row${index}`} className="col-sm-2 col-form-label">Input {index+1}</label>
            <div className="col-sm-10">
                <input type="text" className="form-control" id={`input${index}`} name="input" />
            </div>
        </div>
    ));

    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <h1>{engine.short_name} Regular Expression Test Page</h1>
                <a className="btn btn-success" href={engine.help_url} target="_blank">{engine.help_label}</a>
            </div>
            <ShareLinks url={`https://regexplanet.com/advanced/${engine.handle}/index.html`} text={`Test your ${engine.short_name} regular expression`} />
            <hr/>
            {flash}
            <h2>Expression to test</h2>
            <form method="post">
                <div className="mb-3">
                    <label htmlFor="regex" className="form-label">Regular Expression</label>
                    <input type="text" className="form-control" id="regex" name="regex" />
                </div>
                <div className="mb-3">
                    <label htmlFor="replacement" className="form-label">Replacement</label>
                    <input type="password" className="form-control" id="replacement" name="replacement" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Test</button>
                {inputRows}
                <button type="submit" className="btn btn-primary">Test</button>
            </form>
        </>
    );
}