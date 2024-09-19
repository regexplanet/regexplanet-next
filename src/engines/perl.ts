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
  options: {
    multiline: "multiline (m)",
    dotall: "single line (s)",
    ignorecase: "case-insensitive (i)",
    comment: "Extended with whitespace and comments (x)",
    p: "Preserve matched strings (p)",
    global: "Global match (g)",
    c: "Keep current position (c)",
    a: "Use ASCII charset rules (a)",
    d: "Use default charset rules (d)",
    l: "Use locale charset rules (l)",
    u: "Use Unicode charset rules (u)",
  },
  short_name: "Perl",
  source_url: "https://github.com/regexplanet/regexplanet-perl-cgi",
  status_url: "https://perl.gcr.regexplanet.com/status.pl",
  test_url: "https://perl.gcr.regexplanet.com/test.pl",
};
