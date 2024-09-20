/* eslint-disable @next/next/no-img-element */

import { RegexEngine } from "@/engines/RegexEngine";


export function EngineButton(props: { engine: RegexEngine }) {
    return (
        <a className="btn  btn-outline-light border-dark m-2"
            href={`/advanced/${props.engine.handle}/index.html`}
            title={props.engine.short_name}>
            <img alt={props.engine.short_name}
                src={props.engine.logo_ar21}
                style={{ "height": "6em" }}
            />
        </a>
    );
}