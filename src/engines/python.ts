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
  options: {
    ignorecase: "IGNORECASE",
    locale: "LOCALE",
    multiline: "MULTILINE",
    dotall: "DOTALL",
    unicode: "UNICODE",
    comment: "VERBOSE",
    debug: "DEBUG",
  },
  short_name: "Python",
  source_url: "https://github.com/regexplanet/regexplanet-python",
  status_url: "https://regexplanet-python.appspot.com/status.json",
  test_url: "https://regexplanet-python.appspot.com/test.json",
};
