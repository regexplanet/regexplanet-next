import type { RegexEngine } from "./RegexEngine";

export const bun: RegexEngine = {
  description: "RegExp Object",
  enabled: true,
  help_label: "MDN",
  help_url:
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",
  handle: "bun",
  level: "beta",
  links: {
    "MDN RegExp Object":
      "https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/RegExp",
    "MDN flags":
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags",
  },
  logo_icon: "https://www.vectorlogo.zone/logos/bunsh/bunsh-icon.svg",
  logo_ar21: "https://www.vectorlogo.zone/logos/bunsh/bunsh-ar21.svg",
  nodeping_url: "https://nodeping.com/reports/checks/LATER",
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
  short_name: "Bun",
  source_url: "https://github.com/regexplanet/regexplanet-bun",
  status_url: "https://bun.gcr.regexplanet.com/status.json",
  test_url: "https://bun.gcr.regexplanet.com/test.json",
};
