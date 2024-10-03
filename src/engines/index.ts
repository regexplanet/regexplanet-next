import { TestOutput } from "@/types/TestOutput";
import type { RegexEngine } from "./RegexEngine";

import { dotnet } from "./dotnet";
import { erlang } from "./erlang";
import { go } from "./go";
import { haskell } from "./haskell";
import { java } from "./java";
import { mysql } from "./mysql";
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
  [erlang.handle, erlang],
  [go.handle, go],
  [haskell.handle, haskell],
  [java.handle, java],
  [mysql.handle, mysql],
  [dotnet.handle, dotnet],
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

class EngineNotImplementedError extends Error {
  constructor(handle: string) {
    super("Engine not implemented");
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

function getWorkingEngine(handle: string): RegexEngine | undefined {
  const theEngine = engineMap.get(handle);
  if (theEngine && theEngine.test_url) {
    return theEngine;
  }
  return undefined;
}

function getWorkingEngineOrThrow(handle: string): RegexEngine {
  const theEngine = engineMap.get(handle);
  if (!theEngine) {
    throw new EngineNotFoundError(handle);
  }
  if (!theEngine.test_url) {
    throw new EngineNotImplementedError(handle);
  }
  return theEngine;
}

function getWorkingEngines(): Array<RegexEngine> {
  return Array.from(engineMap.values()).filter((engine) => engine.test_url);
}

async function runTest(
  engine: RegexEngine,
  testInput: FormData
): Promise<TestOutput> {
  if (!engine.test_url) {
    throw new EngineNotImplementedError(engine.handle);
  }

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

export {
  getEngine,
  getEngines,
  getEngineOrThrow,
  getWorkingEngine,
  getWorkingEngines,
  getWorkingEngineOrThrow,
  runTest,
};
