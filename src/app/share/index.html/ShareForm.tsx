import Link from "next/link";

type ShareFormProps = {
    shareCode?: string;
}


export function ShareForm(props: ShareFormProps) {

    return (
        <div className="d-flex justify-content-center">
            <form action="/share/index.html" className="col-8 col-lg-4 border p-3" method="get">
                <div className="mb-3">
                    <label htmlFor="legacy" className="form-label">Share Code</label>
                    <input type="text" className="form-control" id="share" name="share" defaultValue={props.shareCode} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link className="btn btn-outline-primary ms-2" href="/">Cancel</Link>
            </form>
        </div>
    )
}
