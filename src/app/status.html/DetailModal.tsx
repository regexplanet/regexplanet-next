import { useState } from "react";

type DetailModalProps = {
    handle: string;
    title: string;
    details: string;
}

export function DetailModal({ handle, title, details }: DetailModalProps) {
    const [ open, setOpen ] = useState(false);

    return (
        <>
            <button type="button" className="btn btn-sm btn-primary float-end" onClick={() => setOpen(true)}>
                more
            </button>
            <div className="modal" id={`modal${handle}`} tabIndex={-1} role="dialog" aria-labelledby={`modal${handle}title`} aria-hidden={!open} style={{ display: open ? "block" : "none" }}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header d-flex justify-content-between">
                            <h5 className="modal-title fs-5" id={`modal${handle}title`}>{title}</h5>
                            <button type="button" className="btn-close" onClick={() => setOpen(false)} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <pre>{details}</pre>
                        </div>
                    </div>
                </div>
            </div>
        </>);

}