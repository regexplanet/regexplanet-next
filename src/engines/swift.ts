import type { RegexEngine } from "./RegexEngine";

export const swift: RegexEngine = {
  description: "",
  enabled: true,
  help_label: "Regex Structure",
  help_url: "https://developer.apple.com/documentation/swift/regex",
  handle: "swift",
  level: "alpha",
  links: {
    RegexBuilder: "https://developer.apple.com/documentation/regexbuilder",
  },
  logo_icon: "https://www.vectorlogo.zone/logos/swift/swift-icon.svg",
  logo_ar21: "https://www.vectorlogo.zone/logos/swift/swift-ar21.svg",
  nodeping_id: "sd8rr8e8-0vw2-4cur-87tg-tnm9et6pc6w5",
  options: [
    {
      code: "anchorsMatchLineEndings",
      description:
        "the start and end of input anchors (^ and $) also match against the start and end of a line.",
    },
    {
      code: "asciiOnlyCharacterClasses",
      description: "only ASCII characters when matching character classes.",
    },
    { code: "asciiOnlyDigits", description: "only ASCII characters as digits" },
    {
      code: "asciiOnlyWhitespace",
      description: "only ASCII characters as space characters",
    },
    {
      code: "asciiOnlyWordCharacters",
      description: "only ASCII characters as word characters",
    },
    {
      code: "dotMatchesNewlines",
      description:
        "the “any” metacharacter (.) also matches against the start and end of a line.",
    },
    { code: "ignoresCase", description: "ignores case when matching" },
    {
      code: "unicodeMatchingSemantics",
      description: "use Unicode scalar matching sematics",
    },
  ],
  short_name: "Swift",
  source_url: "https://github.com/regexplanet/regexplanet-swift",
  status_url: "https://swift.gcr.regexplanet.com/status.json",
  test_url: "https://swift.gcr.regexplanet.com/test.json",
};
