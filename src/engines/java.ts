import type { RegexEngine } from "./RegexEngine";

export const java: RegexEngine = {
  description: "java.util.regex.Pattern",
  enabled: true,
  help_label: "JavaDoc",
  help_url:
    "https://docs.oracle.com/javase/6/docs/api/java/util/regex/Pattern.html#sum",
  handle: "java",
  level: "golden",
  links: {},
  logo_icon: "https://www.vectorlogo.zone/logos/java/java-icon.svg",
  logo_ar21: "https://www.vectorlogo.zone/logos/java/java-ar21.svg",
  nodeping_url:
    "https://nodeping.com/reports/checks/m84cfhq9-gk43-44r5-8mih-syzu6vp45tuk",
  notfound: ["kotlin"],
  options: [
    {
      code: "CANON_EQ",
      value: 128,
      description: "Enables canonical equivalence.",
    },
    {
      code: "CASE_INSENSITIVE",
      value: 2,
      description: "Enables case-insensitive matching.",
    },
    {
      code: "COMMENTS",
      value: 4,
      description: "Permits whitespace and comments in pattern.",
    },
    { code: "DOTALL", value: 32, description: "Enables dotall mode." },
    {
      code: "LITERAL",
      value: 16,
      description: "Enables literal parsing of the pattern.",
    },
    { code: "MULTILINE", value: 8, description: "Enables multiline mode." },
    {
      code: "UNICODE_CASE",
      value: 64,
      description: " Enables Unicode-aware case folding.",
    },
    { code: "UNIX_LINES", value: 1, description: "Enables Unix lines mode." },
  ],
  short_name: "Java",
  source_url: "https://github.com/regexplanet/regexplanet-java",
  status_url: "https://regexplanet-java.appspot.com/status.jsp",
  test_url: "https://regexplanet-java.appspot.com/test.jsp",
};
