import type { RegexEngine } from "./RegexEngine";

export const php: RegexEngine = {
  description: "PCRE Functions",
  enabled: true,
  help_label: "PCRE Overview",
  help_url: "http://www.php.net/manual/en/book.pcre.php",
  handle: "php",
  level: "alpha",
  links: {
    "Pattern Modifiers":
      "http://www.php.net/manual/en/reference.pcre.pattern.modifiers.php",
  },
  logo_icon: "https://www.vectorlogo.zone/logos/php/php-icon.svg",
  logo_ar21: "https://www.vectorlogo.zone/logos/php/php-ar21.svg",
  nodeping_url:
    "https://nodeping.com/reports/checks/tv5izwkj-w7m2-4epk-8l9i-2z8y36h0o1n1",
  options: [
    {
      code: "i",
      legacyCode: "ignorecase",
      portableCode: "ignorecase",
      description: "PCRE_CASELESS",
    },
    {
      code: "m",
      legacyCode: "multiline",
      portableCode: "multiline",
      description: "PCRE_MULTILINE",
    },
    {
      code: "s",
      legacyCode: "dotall",
      portableCode: "dotall",
      description: "PCRE_DOTALL",
    },
    {
      code: "x",
      portableCode: "comments",
      legacyCode: "comment",
      description: "PCRE_EXTENDED",
    },
    //{ code: "A", description: "PCRE_ANCHORED" },
    //{ code: "D", description: "PCRE_DOLLAR_ENDONLY" },
    //{ code: "S", description: "extra analysis during compilation" },
    //{ code: "U", description: "PCRE_UNGREEDY" },
    //{ code: "X", description: "PCRE_EXTRA" },
    //{ code: "J", description: "PCRE_INFO_JCHANGED" },
    { code: "u", legacyCode: "unicode", description: "PCRE8" },
    //{ code: "n", description: "PCRE_NO_AUTO_CAPTURE" },
  ],
  short_name: "PHP",
  source_url: "https://github.com/regexplanet/regexplanet-php",
  status_url: "https://regexplanet-php.appspot.com/status.php",
  test_url: "https://regexplanet-php.appspot.com/test.php",
};
