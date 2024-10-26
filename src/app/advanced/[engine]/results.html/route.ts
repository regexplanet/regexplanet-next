import { NextRequest } from "next/server";
//import { renderToStaticMarkup, renderToString } from "react-dom/server";
import { notFound, redirect } from "next/navigation";

import { postpage } from "./postpage";
import { type TestInput, type TestOutput } from "@regexplanet/common";
import { getEngine } from "@/engines";

async function renderPage(
  engine: string,
  method: string,
  testInput: TestInput,
  testOutput: TestOutput
) {
  //return (await postpage(testOutput)).toString(); // [object Object]
  //return renderToStaticMarkup;(await postpage(testOutput)); next fatal compile error
  const { renderToString } = await import("react-dom/server");
  return renderToString(await postpage(testOutput));
}

export async function GET(
  request: Request,
  { params }: { params: { engine: string } }
) {
  const engine = getEngine(params.engine);
  if (!engine) {
    return notFound();
  }

  redirect("/advanced/${engine.handle}/results.html");
}

export async function POST(
  request: NextRequest,
  { params }: { params: { engine: string } }
) {
  const engine = getEngine(params.engine);
  if (!engine) {
    return notFound();
  }
  if (!engine.test_url) {
    return new Response("Engine does not support testing", {
      status: 400,
    });
  }

  const rawData = await request.formData();

  const testInput = {
    engine: engine.handle,
    regex: (rawData.get("regex") || "") as string,
    replacement: (rawData.get("replacement") || "") as string,
    options: (rawData.getAll("option") || "") as string[],
    inputs: (rawData.getAll("input") || []) as string[],
  };

  const response = await fetch(engine.test_url); //(testInput);
  const testOutput = (await response.json()) as TestOutput;

  const html = await renderPage(engine.handle, "post", testInput, testOutput);

  return new Response(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html",
    },
  });
}
