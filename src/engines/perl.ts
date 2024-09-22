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
    { code: "m", value: "m", description: "multiline" },
    { code: "s", value: "s", description: "single line" },
    { code: "i", value: "i", description: "case-insensitive" },
    {
      code: "x",
      value: "x",
      description: "Extended with whitespace and comments",
    },
    { code: "p", value: "p", description: "Preserve matched strings" },
    { code: "g", value: "g", description: "Global match" },
    { code: "c", value: "c", description: "Keep current position" },
    { code: "a", value: "a", description: "Use ASCII charset rules" },
    { code: "d", value: "d", description: "Use default charset rules" },
    { code: "l", value: "l", description: "Use locale charset rules" },
    { code: "u", value: "u", description: "Use Unicode charset rules" },
  ],
  option_notes: `When <code>m</code> and <code>s</code> together, <code>.</code> matches any char including newlines but <code>^</code> and <code>$</code> match lines.`,
  short_name: "Perl",
  source_url: "https://github.com/regexplanet/regexplanet-perl-cgi",
  status_url: "https://perl.gcr.regexplanet.com/status.pl",
  test_url: "https://perl.gcr.regexplanet.com/test.pl",
};
