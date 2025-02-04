import type { RegexEngine } from "./RegexEngine";

export const deno: RegexEngine = {
  description: "RegExp Object",
  enabled: true,
  help_label: "MDN",
  help_url:
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",
  handle: "deno",
  level: "golden",
  links: {
    "MDN RegExp Object":
      "https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/RegExp",
    "MDN flags":
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags",
  },
  logo_icon: "https://www.vectorlogo.zone/logos/deno/deno-icon.svg",
  logo_ar21: "https://www.vectorlogo.zone/logos/deno/deno-ar21.svg",
  nodeping_uuid: "9z4pmj0b-ve3m-42s9-8s07-6c53rlel69iy",
  nodeping_id: "201109281250J5K3P-43JMJ07Z",
  notfound: ["javascript", "typescript"],
  options: [
    {
      code: "d",
      description: "Generate indices for substring matches. (hasIndices)",
    },
    { code: "g", description: "Global search. (global)" },
    {
      code: "i",
      description: "Case-insensitive search. (ignoreCase)",
      portableCode: "ignorecase",
    },
    {
      code: "m",
      portableCode: "multiline",
      description:
        "Allows ^ and $ to match next to newline characters. (multiline)",
    },
    {
      code: "s",
      description: "Allows . to match newline characters. (dotAll)",
      portableCode: "dotall",
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
  short_name: "Deno",
  source_url: "https://github.com/regexplanet/regexplanet-deno",
  status_url: "https://deno.gcr.regexplanet.com/status.json",
  test_url: "https://deno.gcr.regexplanet.com/test.json",
};
