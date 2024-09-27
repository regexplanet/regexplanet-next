import type { RegexEngine } from "./RegexEngine";

export const perl: RegexEngine = {
  description: "perlre",
  enabled: true,
  help_label: "perldoc",
  help_url: "http://perldoc.perl.org/perlre.html",
  handle: "perl",
  level: "golden",
  links: {
    "Intro (perlrequick)": "http://perldoc.perl.org/perlrequick.html",
    "Tutorial (perlretut)": "http://perldoc.perl.org/perlretut.html",
  },
  logo_icon: "https://www.vectorlogo.zone/logos/perl/perl-icon.svg",
  logo_ar21: "https://www.vectorlogo.zone/logos/perl/perl-ar21.svg",
  nodeping_url:
    "https://nodeping.com/reports/checks/gkh86985-3ae2-4w7b-8opi-il8pki62v1ie",
  options: [
    {
      code: "m",
      legacyCode: "multiline",
      portableCode: "multiline",
      description: "Multiline",
    },
    { code: "s", legacyCode: "dotall", description: "Single line" },
    {
      code: "i",
      legacyCode: "ignorecase",
      portableCode: "ignorecase",
      description: "Case-insensitive",
    },
    {
      code: "x",
      legacyCode: "comment",
      portableCode: "comments",
      description: "Extended with whitespace and comments",
    },
    { code: "p", legacyCode: "p", description: "Preserve matched strings" },
    { code: "g", legacyCode: "global", description: "Global match" },
    { code: "c", legacyCode: "c", description: "Keep current position" },
    { code: "a", legacyCode: "a", description: "Use ASCII charset rules" },
    { code: "d", legacyCode: "d", description: "Use default charset rules" },
    { code: "l", legacyCode: "l", description: "Use locale charset rules" },
    { code: "u", legacyCode: "u", description: "Use Unicode charset rules" },
  ],
  option_notes: `When <code>m</code> and <code>s</code> together, <code>.</code> matches any char including newlines but <code>^</code> and <code>$</code> match lines.`,
  short_name: "Perl",
  source_url: "https://github.com/regexplanet/regexplanet-perl-cgi",
  status_url: "https://perl.gcr.regexplanet.com/status.pl",
  test_url: "https://perl.gcr.regexplanet.com/test.pl",
};
