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
    { code: "i", value: "i", description: "PCRE_CASELESS" },
    { code: "m", value: "m", description: "PCRE_MULTILINE" },
    { code: "s", value: "s", description: "PCRE_DOTALL" },
    { code: "x", value: "x", description: "PCRE_EXTENDED" },
    { code: "A", value: "A", description: "PCRE_ANCHORED" },
    { code: "D", value: "D", description: "PCRE_DOLLAR_ENDONLY" },
    { code: "S", value: "S", description: "extra analysis during compilation" },
    { code: "U", value: "U", description: "PCRE_UNGREEDY" },
    { code: "X", value: "X", description: "PCRE_EXTRA" },
    { code: "J", value: "J", description: "PCRE_INFO_JCHANGED" },
    { code: "u", value: "u", description: "PCRE8" },
    { code: "n", value: "n", description: "PCRE_NO_AUTO_CAPTURE" },
  ],
  short_name: "PHP",
  source_url: "https://github.com/regexplanet/regexplanet-php",
  status_url: "https://regexplanet-php.appspot.com/status.php",
  test_url: "https://regexplanet-php.appspot.com/test.php",
};
