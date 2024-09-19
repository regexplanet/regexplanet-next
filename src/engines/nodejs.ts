import type { RegexEngine } from "./RegexEngine";

export const nodejs: RegexEngine = {
  description: "RegExp object",
  enabled: true,
  help_label: "MDN",
  help_url:
    "https://developer.mozilla.org/en/JavaScript/Guide/Regular_Expressions",
  handle: "javascript",
  level: "golden",
  links: {
    "MDN RegExp Object":
      "https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/RegExp",
    w3schools: "http://www.w3schools.com/jsref/jsref_obj_regexp.asp",
  },
  logo_horizontal:
    "https://www.vectorlogo.zone/logos/nodejs/nodejs-horizontal.svg",
  logo_icon: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
  logo_ar21: "https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg",
  nodeping_url:
    "https://nodeping.com/reports/checks/9z4pmj0b-ve3m-42s9-8s07-6c53rlel69iy",
  options: {
    multiline:
      "^ and $ so they match at the beginning and end, respectively, of any line, and not just the beginning and end of the entire string (m)",
    ignorecase: "Case insensitive matching (IGNORECASE)",
    global: "global - find all matches (g)",
  },
  short_name: "Node.js",
  source_url: "https://github.com/regexplanet/regexplanet-js",
  status_url: "https://js.gcr.regexplanet.com/status.json",
  test_url: "https://js.gcr.regexplanet.com/test.json",
};
