import type { RegexEngine } from "./RegexEngine";

export const go: RegexEngine = {
  description: "Package regexp",
  enabled: true,
  help_label: "pkg.go.dev",
  help_url: "https://pkg.go.dev/regexp",
  handle: "go",
  level: "golden",
  links: { "re2 syntax": "http://code.google.com/p/re2/wiki/Syntax" },
  logo_icon: "https://www.vectorlogo.zone/logos/golang/golang-icon.svg",
  logo_ar21: "https://www.vectorlogo.zone/logos/golang/golang-ar21.svg",
  nodeping_url:
    "https://nodeping.com/reports/checks/cvdmibs4-lyts-48bp-8l93-a4y3ihfrkncc",
  options: [
    {
      code: "posix",
      description: "Use `CompilePOSIX` instead of `Compile`",
    },
  ],
  option_notes: `The <code>posix</code> option is really a separate API call (<code>CompilePOSIX</code>).  Other option need to be specified in the regex pattern.`,
  short_name: "Go",
  source_url: "https://github.com/regexplanet/regexplanet-golang",
  status_url: "https://regexplanet-go.appspot.com/status.json",
  test_url: "https://regexplanet-go.appspot.com/test.json",
};
