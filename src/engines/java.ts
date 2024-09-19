import type { RegexEngine } from './RegexEngine';

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
  options: {
    comment: "Ignore whitespace in the regular expression (EXTENDED)",
    ignorecase: "Case insensitive matching (IGNORECASE)",
    dotall: "Newlines are just another character (MULTILINE)",
  },
  short_name: "Java",
  source_url: "https://github.com/regexplanet/regexplanet-java",
  status_url: "https://regexplanet-java.appspot.com/status.jsp",
  test_url: "https://regexplanet-java.appspot.com/test.jsp",
};