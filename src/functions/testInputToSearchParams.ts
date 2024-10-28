import { TestInput } from "@regexplanet/common";

export function testInputToSearchParams(testInput: TestInput): URLSearchParams {
    const searchParams = new URLSearchParams();
    searchParams.set("engine", testInput.engine);
    searchParams.set("regex", testInput.regex);
    searchParams.set("replacement", testInput.replacement);
    testInput.options.forEach((option) => searchParams.append("option", option));
    testInput.inputs.forEach((input) => searchParams.append("input", input));
    return searchParams;
}