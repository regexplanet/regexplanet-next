'use client'
import Link from 'next/link'
import { redirect, useParams } from 'next/navigation' 
import { EngineButton } from '@/components/EngineButton';
import { RegexEngine } from '@/engines/RegexEngine';
import { getWorkingEngines } from '@/engines';

const niceNames = new Map<string, string>([
  ["javascript", "JavaScript"],
  ["typescript", "TypeScript" ],
]);

function NiceName(handle:string) {
  const niceName = niceNames.get(handle);
  if (niceName) {
    return <>{niceName}</>
  }

  return <>&quot;{handle}&quot;</>;
}

function SelectEngine(handle:string, engines:RegexEngine[]) {
  const niceName = NiceName(handle);

  const buttons = engines.map((engine) => {
    return (<EngineButton key={engine.handle} engine={engine} />);
  });


  return (
    <>
      <h1>{niceName} Regex Engines</h1>
      <hr />
      <div className="alert alert-info" role="alert">There are multiple regular expression engines available for {niceName}.</div>
      <div className="row">
        <div className="col d-flex flex-wrap justify-content-center">
          {buttons}
        </div>
      </div>
    </>
  );
}

function NoSuchEngine(handle:string) {
  return (
    <>
      <h1>Engine not supported</h1>
      <p>Sorry, I don&apos;t support the &quot;{handle}&quot; regex engine.</p>
      <p>
        <Link className="btn btn-primary mx-2" href="/">See available</Link>
        <Link className="btn btn-primary mx-2"  href="/support/contact.html">Request support for a new one</Link>
      </p>
    </>
  )
}

export default function NotFound() {
  const params = useParams()

  let handle = params.engine;
  if (!handle) {
    handle = 'unknown';
  } else if (Array.isArray(handle)) {
    handle = handle[0];
  }

  if (handle.toLowerCase() != handle) {
    return redirect(`/advanced/${handle.toLowerCase()}/index.html`);
  }

  const engines = getWorkingEngines().filter(engine => engine.notfound && engine.notfound.includes(handle));

  if (engines.length == 1) {
    return redirect(`/advanced/${engines[0].handle}/index.html`);
  }

  return engines.length > 0 ? SelectEngine(handle, engines) : NoSuchEngine(handle);
}