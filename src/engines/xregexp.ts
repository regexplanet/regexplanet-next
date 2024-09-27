import type { RegexEngine } from "./RegexEngine";

export const xregexp: RegexEngine = {
  description: "",
  enabled: true,
  help_label: "XRegExp Syntax",
  help_url: "",
  handle: "xregexp",
  level: "golden",
  links: {
    "XRegExp option flags": "http://xregexp.com/flags/",
    API: "http://xregexp.com/api/",
    "Browser fixes": "http://xregexp.com/cross_browser/",
    Addons: "http://xregexp.com/plugins/",
  },
  logo_icon: "https://www.vectorlogo.zone/logos/xregexp/xregexp-icon.svg",
  logo_ar21: "https://www.vectorlogo.zone/logos/xregexp/xregexp-ar21.svg",
  nodeping_url:
    "https://nodeping.com/reports/checks/7ysrbqyo-38sg-44au-8j78-g6fpipl8sxho",
  notfound: ["javascript", "typescript"],
  options: [
    {
      code: "n",
      legacyCode: "explicitcapture",
      description: "Named capture only",
    },
    {
      code: "s",
      portableCode: "dotall",
      legacyCode: "dotall",
      description: "Dot matches all (singleline)",
    },
    {
      code: "x",
      portableCode: "comments",
      legacyCode: "comment",
      description: "Free-spacing and line comments (extended)",
    },
    {
      code: "A",
      legacyCode: "astral",
      description:
        "21-bit Unicode properties (astral) — Requires the Unicode Base addon",
    },
    {
      code: "g",
      legacyCode: "global",
      description: "All matches, or advance lastIndex after matches (global)",
    },
    {
      code: "i",
      portableCode: "ignorecase",
      legacyCode: "ignorecase",
      description: "Case insensitive (ignoreCase)",
    },
    {
      code: "m",
      portableCode: "multiline",
      legacyCode: "multiline",
      description: "^ and $ match at newlines (multiline)",
    },
    /*{
      code: "u",
      legacyCode: "",
      description:
        "Handle surrogate pairs as code points and enable \\u{…} and \\p{…} (unicode) — Requires native ES6 support",
    },*/
    {
      code: "y",
      legacyCode: "sticky",
      description:
        "Matches must start at lastIndex (sticky) — Requires Firefox 3+ or native ES6 support",
    },
    /*{
      code: "d",
      description:
        "Include indices for capturing groups on match results (hasIndices) — Requires native ES2021 support",
    },*/
  ],
  option_notes: `XRegExp provides four new flags (n, s, x, A), which can be combined with native flags and arranged in any order. Unlike native flags, non-native flags do not show up as properties on regular expression objects.`,
  short_name: "XRegExp",
  source_url: "https://github.com/regexplanet/regexplanet-xregexp",
  status_url: "https://xregexp.gcr.regexplanet.com/status.json",
  test_url: "https://xregexp.gcr.regexplanet.com/test.json",
};
