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
  options: {
    ignorecase: "Case-insensitive matching (i)",
    multiline:
      "^ and $ so they match at the beginning and end, respectively, of any line, and not just the beginning and end of the entire string (m)",
    global: "global - find all matches (g)",
    dotall: "Dot matches all (s)",
    comment: "Free-spacing and line comments (x)",
    explicitcapture: "Explicit capture (n)",
    sticky:
      "Matches must start at lastIndex (y) NOTE: not supported at RegexPlanet",
    astral: "Support Unicode astral characters (A)",
  },
  short_name: "XRegExp",
  source_url: "https://github.com/regexplanet/regexplanet-xregexp",
  status_url: "https://xregexp.gcr.regexplanet.com/status.json",
  test_url: "https://xregexp.gcr.regexplanet.com/test.json",
};
