import type { RegexEngine } from "./RegexEngine";

export const ruby: RegexEngine = {
  description: "Regexp class",
  enabled: true,
  handle: "ruby",
  help_label: "Regexp Ruby-Doc",
  help_url: "https://ruby-doc.org/3.3.5/Regexp.html",
  level: "beta",
  links: {
    "Programming Ruby": "http://ruby-doc.com/docs/ProgrammingRuby/#UJ",
  },
  logo_icon: "https://www.vectorlogo.zone/logos/ruby-lang/ruby-lang-icon.svg",
  logo_ar21: "https://www.vectorlogo.zone/logos/ruby-lang/ruby-lang-ar21.svg",
  nodeping_url:
    "https://nodeping.com/reports/checks/e6od3bui-a5wl-49ff-8698-0cbtjc52rqw1",
  options: [
    {
      code: "x",
      portableCode: "comments",
      legacyCode: "comment",
      description: "Extended: Ignore whitespace and '#' comments",
    },
    {
      code: "i",
      portableCode: "ignorecase",
      legacyCode: "ignorecase",
      description: "Case-insensitive",
    },
    {
      code: "m",
      portableCode: "multiline",
      legacyCode: "multiline",
      description: "Multiline: Newlines are just another character",
    },
    //{ code: "o", description: "Interpolation mode" },
  ],
  short_name: "Ruby",
  source_url: "https://github.com/regexplanet/regexplanet-ruby",
  status_url: "https://ruby.gcr.regexplanet.com/status.json",
  test_url: "https://ruby.gcr.regexplanet.com/status.json",
};
