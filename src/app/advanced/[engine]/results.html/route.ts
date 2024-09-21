import { TestInput } from "@/types/TestInput";
import { TestOutput } from "@/types/TestOutput";
import { NextRequest } from "next/server";
//import { renderToStaticMarkup, renderToString } from "react-dom/server";
import { postpage } from "./postpage";
import { getEngine, runTest } from "@/engines";
import { notFound } from "next/navigation";



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

  const testInput = {
    regex: "test",
    replacement: "test",
    options: "get",
    inputs: ["test"],
  };

  /* 
  const rawItem = request.url;
  if (!rawItem) {
    return new Response("No test input", {
      status: 400,
    });
  }
  const testInput = JSON.parse(rawItem) as TestInput;
  */
  const formData = new FormData();
  formData.set("regex", testInput.regex);

  const testOutput = runTest(engine, formData);

  const html = JSON.stringify(testOutput); 

  return new Response(html, {
    status: 200,
  });
}

export async function POST(
  request: NextRequest,
  { params }: { params: { engine: string } }
) {
    const engine = getEngine(params.engine);
    if (!engine) {
      return notFound();
    }

  const rawData = await request.formData();

  const testInput = {
    regex: (rawData.get("regex") || "") as string,
    replacement: (rawData.get("replacement") || "") as string,
    options: (rawData.get("options") || "") as string,
    inputs: (rawData.getAll("input") || []) as string[],
  };

  const testOutput = await runTest(engine, rawData);

  const html = await renderPage(engine.handle, "post", testInput, testOutput);

  return new Response(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html"
    },
  });
}
