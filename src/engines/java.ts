import type { RegexEngine } from "./RegexEngine";

export const java: RegexEngine = {
  description: "java.util.regex.Pattern",
  enabled: true,
  help_label: "JavaDoc",
  help_url:
    "https://docs.oracle.com/en/java/javase/23/docs/api/java.base/java/util/regex/Pattern.html",
  handle: "java",
  level: "golden",
  links: {},
  logo_icon: "https://www.vectorlogo.zone/logos/java/java-icon.svg",
  logo_ar21: "https://www.vectorlogo.zone/logos/java/java-ar21.svg",
  nodeping_uuid: "m84cfhq9-gk43-44r5-8mih-syzu6vp45tuk",
  nodeping_id: "201109281250J5K3P-J5GOX6A4",
  notfound: ["kotlin"],
  options: [
    {
      code: "CANON_EQ",
      legacyCode: "canon",
      numericCode: 128,
      description: "Canonical equivalence.",
    },
    {
      code: "CASE_INSENSITIVE",
      legacyCode: "ignorecase",
      portableCode: "ignorecase",
      numericCode: 2,
      description: "Case-insensitive matching.",
    },
    {
      code: "COMMENTS",
      legacyCode: "comments",
      portableCode: "comments",
      numericCode: 4,
      description: "Allow whitespace and comments in pattern.",
    },
    {
      code: "DOTALL",
      legacyCode: "dotall",
      numericCode: 32,
      description: "Enables dotall mode.",
    },
    {
      code: "LITERAL",
      legacyCode: "literal",
      numericCode: 16,
      description: "Literal parsing of the pattern.",
    },
    {
      code: "MULTILINE",
      legacyCode: "multiline",
      numericCode: 8,
      description: "Multiline mode.",
    },
    {
      code: "UNICODE_CASE",
      legacyCode: "unicode",
      numericCode: 64,
      description: "Unicode-aware case folding.",
    },
    /* LATER: enable when engine gets updated {
      code: "UNICODE_CHARACTER_CLASS",
      numericCode: 256,
      description:
        "Use the Unicode version of Predefined character classes and POSIX character classes.",
    },*/
    {
      code: "UNIX_LINES",
      legacyCode: "unixline",
      numericCode: 1,
      description: "Unix lines mode.",
    },
  ],
  short_name: "Java",
  source_url: "https://github.com/regexplanet/regexplanet-java",
  status_url: "https://java.gcr.regexplanet.com/status.json",
  test_url: "https://java.gcr.regexplanet.com/test.json",
};
