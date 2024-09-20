/* eslint-disable @next/next/no-img-element */
import { EngineButton } from '@/components/EngineButton';
import { getEngines } from '@/engines';

export default function Home() {

  const buttons = getEngines().map((engine) => {
    return ( <EngineButton key={engine.handle} engine={engine} />);
  });

  return (
    <>
      <h1>Online Regular Expression Testing</h1>
      <div className="row">
        <div className="col">
          Regular expressions are an incredibly powerful tool, but can be rather tricky to get exactly right. This is a website that I wrote so I could quickly and easily test regular expressions during development.
          <br />
          <br />
          Pick which programming language you are using:
        </div>
      </div>
      <div className="row">
        <div className="col d-flex flex-wrap justify-content-center">
          {buttons}
        </div>
      </div>
    </>
  );
}
