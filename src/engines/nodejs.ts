import type { RegexEngine } from "./RegexEngine";

export const nodejs: RegexEngine = {
  description: "RegExp object",
  enabled: true,
  help_label: "MDN",
  help_url:
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",
  handle: "nodejs",
  level: "golden",
  links: {
    "MDN RegExp Object":
      "https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/RegExp",
    "MDN flags":
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags",
    w3schools: "http://www.w3schools.com/jsref/jsref_obj_regexp.asp",
  },
  logo_ar21: "https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg",
  logo_icon: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
  nodeping_url:
    "https://nodeping.com/reports/checks/9z4pmj0b-ve3m-42s9-8s07-6c53rlel69iy",
  notfound: ["javascript", "typescript"],
  options: [
    {
      code: "d",
      value: "d",
      description: "Generate indices for substring matches. (hasIndices)",
    },
    { code: "g", value: "g", description: "Global search. (global)" },
    {
      code: "i",
      value: "i",
      description: "Case-insensitive search. (ignoreCase)",
    },
    {
      code: "m",
      value: "m",
      description:
        "Allows ^ and $ to match next to newline characters. (multiline)",
    },
    {
      code: "s",
      value: "s",
      description: "Allows . to match newline characters. (dotAll)",
    },
    {
      code: "u",
      value: "u",
      description: `"Unicode"; treat a pattern as a sequence of Unicode code points. (unicode)`,
    },
    {
      code: "v",
      value: "v",
      description:
        "An upgrade to the u mode with more Unicode features. (unicodeSets)",
    },
    {
      code: "y",
      value: "y",
      description: `Perform a "sticky" search that matches starting at the current position in the target string. (sticky)`,
    },
  ],
  short_name: "Node.js",
  source_url: "https://github.com/regexplanet/regexplanet-js",
  status_url: "https://js.gcr.regexplanet.com/status.json",
  test_url: "https://js.gcr.regexplanet.com/test.json",
};
