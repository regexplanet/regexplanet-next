import type { RegexEngine } from "./RegexEngine";

export const haskell: RegexEngine = {
  description: "Text.Regex",
  enabled: false,
  level: "alpha",
  handle: "haskell",
  help_label: "Text.Regex",
  help_url:
    "http://hackage.haskell.org/package/regex-compat-0.95.1/docs/Text-Regex.html",
  nodeping_url:
    "https://nodeping.com/reports/checks/kt5c4lp3-80p5-4rzk-8nq2-kqtyvq4p1a2d",
  links: {
    haskellwiki: "http://www.haskell.org/haskellwiki/Regular_expressions",
    "Text.Regex.TDFA":
      "http://hackage.haskell.org/package/regex-tdfa-1.1.8/docs/Text-Regex-TDFA.html",
    "Text.Regex.TDFA.Common":
      "http://hackage.haskell.org/package/regex-tdfa-1.1.8/docs/Text-Regex-TDFA-Common.html",
  },
  logo_ar21: "https://www.vectorlogo.zone/logos/haskell/haskell-ar21.svg",
  logo_icon: "https://www.vectorlogo.zone/logos/haskell/haskell-icon.svg",
  options: [
    {
      code: "ignorecase",
      description: "Case insensitive (caseSensitive == False)",
    },
    { code: "multiline", description: "^ and $ match EOL (multiline)" },
    { code: "rightAssoc", description: "Right associative (rightAssoc)" },
    {
      code: "newSyntax",
      description: "Add the extended non-POSIX syntax (tdfa only, newSyntax)",
    },
    {
      code: "lastStarGreedy",
      description: "Last star is greedy (tdfa only, lastStarGreedy)",
    },
  ],
  short_name: "Haskell",
};
