/* eslint-disable @next/next/no-img-element */
import { EngineButton } from '@/components/EngineButton';
import { getEngines } from '@/engines';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "RegexPlanet",
  description: `Regular expression (regex/regexp) testing and debugging for ${getEngines().map(x => x.short_name).join(', ')}.`,
};

export default function Home() {

  const buttons = getEngines().map((engine) => {
    return (<EngineButton key={engine.handle} engine={engine} />);
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
      <h2 className="mt-3">One last thing</h2>

      <div className="card my-3 bg-light">
        <div className="card-body">
          Some people, when confronted with a problem, think &ldquo;I know, I’ll use regular expressions.&rdquo; Now they have two problems.<br />
          &nbsp;&nbsp;-- <a href="http://www.jwz.org/">Jamie Zawinski</a> in comp.lang.emacs (or <a href="http://regex.info/blog/2006-09-15/247">somewhere else</a>).
        </div>
      </div>

      <div className="card my-3 bg-light">
        <div className="card-body">
          I define UNIX as &ldquo;30 definitions of regular expressions living under one roof&rdquo;.<br />
          &nbsp;&nbsp;-- <a href="https://www-cs-faculty.stanford.edu/~knuth/">Donald Knuth</a> in <a href="http://amzn.to/GXRTbS">Digital Typography</a>, ch. 33, p. 649 (1999) via <a href="http://code.google.com/p/re2/wiki/Syntax">re2</a>.
        </div>
      </div>

    </>
  );
}
