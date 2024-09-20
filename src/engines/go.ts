import type { RegexEngine } from './RegexEngine';

export const go: RegexEngine = {
  description: "Package regexp",
  enabled: true,
  help_label: "pkg.go.dev",
  help_url: "https://pkg.go.dev/regexp",
  handle: "go",
  level: "golden",
  links: {"re2 syntax": "http://code.google.com/p/re2/wiki/Syntax"},
  logo_icon: "https://www.vectorlogo.zone/logos/golang/golang-icon.svg",
  logo_ar21: "https://www.vectorlogo.zone/logos/golang/golang-ar21.svg",
  nodeping_url:
    "https://nodeping.com/reports/checks/cvdmibs4-lyts-48bp-8l93-a4y3ihfrkncc",
  options: {
    "posix": "POSIX ERE (egrep) syntax and leftmost-longest match semantics"
  },
  short_name: "Go",
  source_url: "https://github.com/regexplanet/regexplanet-golang",
  status_url: "https://regexplanet-go.appspot.com/status.json",
  test_url: "https://regexplanet-go.appspot.com/test.json",
};