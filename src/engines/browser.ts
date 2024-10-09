import type { RegexEngine } from "./RegexEngine";
//import { TestInput } from "@/types/TestInput";
//import { TestOutput } from "@/types/TestOutput";

/*
const browserTest:TestFn = (testInput: TestInput): Promise<TestOutput> => {
    const retVal:TestOutput = {
      success: true,
      html: `<div class="alert alert-warning">Not implemented yet</div>`,
    }

    return Promise.resolve(retVal);
  };
*/

export const browser: RegexEngine = {
  description: "RegExp class",
  enabled: true,
  help_label: "MDN",
  help_url:
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",
  handle: "browser",
  level: "alpha",
  links: {},
  logo_icon: "/images/browsers/browser-icon.svg",
  logo_ar21: "/images/browsers/browser-ar21.svg",
  nodeping_url: undefined,
  notfound: ["javascript", "typescript"],
  options: [
    {
      code: "d",
      description: "Generate indices for substring matches. (hasIndices)",
    },
    { code: "g", legacyCode: "global", description: "Global search. (global)" },
    {
      code: "i",
      legacyCode: "ignorecase",
      description: "Case-insensitive search. (ignoreCase)",
    },
    {
      code: "m",
      legacyCode: "multiline",
      description:
        "Allows ^ and $ to match next to newline characters. (multiline)",
    },
    {
      code: "s",
      description: "Allows . to match newline characters. (dotAll)",
    },
    {
      code: "u",
      description: `"Unicode"; treat a pattern as a sequence of Unicode code points. (unicode)`,
    },
    {
      code: "v",
      description:
        "An upgrade to the u mode with more Unicode features. (unicodeSets)",
    },
    {
      code: "y",
      description: `Perform a "sticky" search that matches starting at the current position in the target string. (sticky)`,
    },
  ],
  short_name: "Your Browser",
  source_url: "https://github.com/regexplanet/regexplanet-next",
  status_url: undefined,
  test_url: "javascript:",
};


