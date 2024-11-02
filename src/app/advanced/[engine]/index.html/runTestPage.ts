import {
  runTest as runBrowserTest,
  type TestInput,
  type TestOutput,
} from "@regexplanet/common";

export async function runTestPage(
  test_url: string,
  testInput: TestInput
): Promise<TestOutput> {
  console.log("running test", testInput);
  if (!testInput || !testInput.regex) {
    return {
      success: false,
      message: "Please enter a regular expression to test",
    };
  }

  if (test_url === "javascript:runBrowserTest") {
    return runBrowserTest(testInput);
  }

  const postData =
    `regex=${encodeURIComponent(testInput.regex)}` +
    `&replacement=${encodeURIComponent(testInput.replacement)}` +
    `&${testInput.options
      .map((option) => `option=${encodeURIComponent(option)}`)
      .join("&")}` +
    `&${testInput.inputs
      .map((input) => `input=${encodeURIComponent(input)}`)
      .join("&")}`;

  //console.log("posting", test_url, postData);

  const response = await fetch(test_url, {
    method: "POST",
    body: postData,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    //mode: "no-cors",
  });
  //console.log("response", response);
  const data = await response.json();

  console.log("test results", data);

  return data as TestOutput;
}
