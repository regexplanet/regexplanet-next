import type { RegexEngine } from "./RegexEngine";

export const python: RegexEngine = {
  description: "re module",
  enabled: true,
  help_label: "docs.python.org",
  help_url: "https://docs.python.org/3/library/re.html",
  handle: "python",
  level: "golden",
  links: {},
  logo_icon: "https://www.vectorlogo.zone/logos/python/python-icon.svg",
  logo_ar21: "https://www.vectorlogo.zone/logos/python/python-ar21.svg",
  nodeping_url:
    "https://nodeping.com/reports/checks/15fanuwl-znir-46nz-8542-fzsk4fg3zrvg",
  options: [
    //{ code: "A", legacyCode: "", numericCode: 256, description: "ASCII" },
    { code: "DEBUG", legacyCode: "debug", numericCode: 128, description: "DEBUG" },
    { code: "I", portableCode: "ignorecase", legacyCode: "ignorecase", numericCode: 2, description: "IGNORECASE" },
    { code: "L", legacyCode: "locale", numericCode: 4, description: "LOCALE" },
    { code: "M", portableCode: "multiline", legacyCode: "multiline", numericCode: 8, description: "MULTILINE" },
    //{ code: "NOFLAG", legacyCode: "", numericCode: 0, description: "NOFLAG" },
    { code: "S", portableCode: "dotall", legacyCode: "dotall", numericCode: 16, description: "DOTALL" },
    { code: "U", legacyCode: "unicode", numericCode: 32, description: "UNICODE" },
    { code: "X", portableCode: "comments", legacyCode: "comment", numericCode: 64, description: "VERBOSE" },
  ],
  short_name: "Python",
  source_url: "https://github.com/regexplanet/regexplanet-python",
  status_url: "https://regexplanet-python.appspot.com/status.json",
  test_url: "https://regexplanet-python.appspot.com/test.json",
};
