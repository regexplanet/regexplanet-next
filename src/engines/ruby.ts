import type { RegexEngine } from "./RegexEngine";

export const ruby: RegexEngine = {
  description: "Regexp class",
  enabled: true,
  handle: "ruby",
  help_label: "Regexp Ruby-Doc",
  help_url: "http://www.ruby-doc.org/core-1.9.3/Regexp.html",
  level: "beta",
  links: {
    "Programming Ruby":
      "http://www.ruby-doc.org/docs/ProgrammingRuby/html/language.html#UJ",
  },
  logo_icon:
    "https://www.vectorlogo.zone/logos/ruby-lang/ruby-lang-icon.svg",
  logo_ar21:
    "https://www.vectorlogo.zone/logos/ruby-lang/ruby-lang-ar21.svg",
  nodeping_url:
    "https://nodeping.com/reports/checks/e6od3bui-a5wl-49ff-8698-0cbtjc52rqw1",
  options: {
    comment: "Ignore whitespace in the regular expression (EXTENDED)",
    ignorecase: "Case insensitive matching (IGNORECASE)",
    dotall: "Newlines are just another character (MULTILINE)",
  },
  short_name: "Ruby",
  source_url: "https://github.com/regexplanet/regexplanet-ruby",
  status_url: "https://ruby.gcr.regexplanet.com/status.json",
  test_url: "https://ruby.gcr.regexplanet.com/status.json",
};
