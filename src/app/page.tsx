/* eslint-disable @next/next/no-img-element */
import { EngineButton } from '@/components/EngineButton';
import { getWorkingEngines } from '@/engines';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "RegexPlanet",
  description: `Regular expression (regex/regexp) testing and debugging for ${getWorkingEngines().map(x => x.short_name).join(', ')}.`,
};

export default function Home() {

  const buttons = getWorkingEngines().map((engine) => {
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
      <div className="row mt-3">
        <div className="col d-flex flex-wrap justify-content-center">
          {buttons}
        </div>
      </div>

      <hr />

      <div className="row mt-3">
        <div className="col d-flex flex-wrap justify-content-center">
        <div className="card m-3 d-inline-block" style={{ "width": "18rem" }}>
          <h5 className="card-header border-bottom p-3 bg-body-tertiary">Sharing</h5>
          <div className="card-body pt-1">
            Share codes are an easy way to share regexes.  If you have a share code, enter it here:
            <div className="pt-2 d-flex justify-content-center">
              <form action="/share/index.html" className="form-inline" method="get">
                <div className="input-group">
                  <input type="text" className="form-control" name="share" placeholder="Share code" />
                  <button type="submit" className="btn btn-primary">Go</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="card m-3 d-inline-block" style={{ "width": "18rem" }}>
          <h5 className="card-header xborder-bottom p-3 bg-body-tertiary">Status</h5>
          <div className="card-body pt-1">
            A badly formed regular expression can run forever, making it very useful for denial of services attacks.  Some of the engines/hosts are susceptible to these.
            <div className="pt-2 d-flex justify-content-center">
              <a className="btn btn-outline-secondary" href="/status.html" rel="nofollow">Engine Status</a>
            </div>
          </div>
        </div>

        <div className="card m-3 d-inline-block" style={{ "width": "18rem" }}>
          <h5 className="card-header xborder-bottom p-3 bg-body-tertiary">Regex Zone</h5>
          <div className="card-body pt-1">
            The <a href="https://www.regex.zone/">Regex Zone</a> is the place to share regular expressions and find common regex patterns.
            <div className="pt-2 d-flex justify-content-center">
              <a className="btn btn-primary" href="https://www.regex.zone/" rel="nofollow">Visit the Regex Zone</a>
            </div>
          </div>
        </div>
      </div>
    </div >

      <hr />

      <h2 className="mt-3">One last thing</h2>
      <div className="card my-3 bg-body-tertiary">
        <div className="card-body">
          Some people, when confronted with a problem, think &ldquo;I know, I’ll use regular expressions.&rdquo; Now they have two problems.<br />
          &nbsp;&nbsp;-- <a href="http://www.jwz.org/">Jamie Zawinski</a> in comp.lang.emacs (or <a href="http://regex.info/blog/2006-09-15/247">somewhere else</a>).
        </div>
      </div>

      <div className="card my-3 bg-body-tertiary">
        <div className="card-body">
          I define UNIX as &ldquo;30 definitions of regular expressions living under one roof&rdquo;.<br />
          &nbsp;&nbsp;-- <a href="https://www-cs-faculty.stanford.edu/~knuth/">Donald Knuth</a> in <a href="http://amzn.to/GXRTbS">Digital Typography</a>, ch. 33, p. 649 (1999) via <a href="http://code.google.com/p/re2/wiki/Syntax">re2</a>.
        </div>
      </div>

    </>
  );
}
