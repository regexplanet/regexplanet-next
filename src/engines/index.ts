import type { RegexEngine } from "./RegexEngine";
import { go } from "./go";
import { java } from "./java";
import { nodejs } from "./nodejs";
import { perl } from "./perl";
import { php } from "./php";
import { python } from "./python";
import { ruby } from "./ruby";
import { rust } from "./rust";
import { tcl } from "./tcl";
import { xregexp } from "./xregexp";

const engineMap = new Map<string, RegexEngine>([
  [go.handle, go],
  [java.handle, java],
  [nodejs.handle, nodejs],
  [perl.handle, perl],
  [php.handle, php],
  [python.handle, python],
  [ruby.handle, ruby],
  [rust.handle, rust],
  [tcl.handle, tcl],
  [xregexp.handle, xregexp],
]);

function getEngine(handle: string): RegexEngine | undefined {
  return engineMap.get(handle);
}

class EngineNotFoundError extends Error {
  constructor(handle: string) {
    super("Engine not found");
    this.handle = handle;
  }
  handle: string;
}

function getEngineOrThrow(handle: string): RegexEngine {
  const theEngine = engineMap.get(handle);
  if (!theEngine) {
    throw new EngineNotFoundError(handle);
  }
  return theEngine;
}

function getEngines(): Array<RegexEngine> {
  return Array.from(engineMap.values());
}

export { getEngines, getEngine, getEngineOrThrow };
