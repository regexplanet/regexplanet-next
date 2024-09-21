import { TestOutput } from "@/types/TestOutput";
import type { RegexEngine } from "./RegexEngine";
import { go } from "./go";
import { java } from "./java";
import { nodejs } from "./nodejs";
import { perl } from "./perl";
import { php } from "./php";
import { postgresql } from "./postgresql";
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
  [postgresql.handle, postgresql],
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

async function runTest(
  engine: RegexEngine,
  testInput: FormData
): Promise<TestOutput> {
  // this is a bogus 'as', but next build insists on it
  const postData = new URLSearchParams(
    testInput as unknown as Record<string, string>
  );

  const response = await fetch(engine.test_url, {
    method: "POST",
    body: postData,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  const data = await response.json();

  return data as TestOutput;
}


export { getEngines, getEngine, getEngineOrThrow, runTest };
