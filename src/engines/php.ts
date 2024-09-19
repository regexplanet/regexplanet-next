import type { RegexEngine } from "./RegexEngine";

export const php: RegexEngine = {
  description: "PCRE Functions",
  enabled: true,
  help_label: "PCRE Overview",
  help_url: "http://www.php.net/manual/en/book.pcre.php",
  handle: "php",
  level: "alpha",
  links: {
  },
  logo_icon: "https://www.vectorlogo.zone/logos/php/php-icon.svg",
  logo_ar21: "https://www.vectorlogo.zone/logos/php/php-ar21.svg",
  nodeping_url: "https://nodeping.com/reports/checks/php",
  options: {
    // see http://www.php.net/manual/en/reference.pcre.pattern.modifiers.php
    ignorecase: "i - Case insensitive (PCRE_CASELESS)",
    comment: "x - Allow comments in regex (PCRE_EXTENDED)",
    dotall: "s - Dot matches line terminator (PCRE_DOTALL)",
    multiline: "m - ^ and $ match EOL (PCRE_MULTILINE)",
    unicode: "u - Pattern strings are treated as UTF-8 (PCRE8)",
    //e (PREG_REPLACE_EVAL)
    //A (PCRE_ANCHORED)
    //D (PCRE_DOLLAR_ENDONLY)
    //S
    //U (PCRE_UNGREEDY)
    //X (PCRE_EXTRA)
    //J (PCRE_INFO_JCHANGED)
  },
  short_name: "PHP",
  source_url: "https://github.com/regexplanet/regexplanet-php",
  status_url: "https://regexplanet-php.appspot.com/status.php",
  test_url: "https://regexplanet-php.appspot.com/test.php",
};
