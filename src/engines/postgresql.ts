import type { RegexEngine } from "./RegexEngine";

export const postgresql: RegexEngine = {
  description: "regexp_* functions",
  enabled: true,
  help_label: "Pattern Matching docs",
  help_url:
    "https://www.postgresql.org/docs/current/functions-matching.html#FUNCTIONS-POSIX-REGEXP",
  handle: "postgresql",
  level: "alpha",
  links: {
    Options:
      "https://www.postgresql.org/docs/current/functions-matching.html#POSIX-EMBEDDED-OPTIONS-TABLE",
  },
  logo_icon: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
  logo_ar21: "https://www.vectorlogo.zone/logos/postgresql/postgresql-ar21.svg",
  nodeping_url:
    "https://nodeping.com/reports/checks/43ytdj0n-jeiu-4zta-8ptc-wr7xmxztp5i8",
  options: [
    { code: "b", description: "rest of RE is a BRE" },
    {
      code: "c",
      description: "case-sensitive matching (overrides operator type)",
    },
    { code: "e", description: "rest of RE is an ERE" },
    {
      code: "i",
      portableCode: "ignorecase",
      description: "case-insensitive matching (overrides operator type)",
    },
    { code: "m", description: "historical synonym for n" },
    {
      code: "n",
      description: "newline-sensitive matching",
    },
    {
      code: "p",
      description: "partial newline-sensitive matching",
    },
    {
      code: "q",
      description:
        "rest of RE is a literal (“quoted”) string, all ordinary characters",
    },
    {
      code: "s",
      description: "non-newline-sensitive matching (default)",
    },
    { code: "t", description: "tight syntax" },
    {
      code: "w",
      description: "inverse partial newline-sensitive (“weird”) matching",
    },
    { code: "x", description: "expanded syntax" },
  ],
  short_name: "PostgreSQL",
  source_url: "https://github.com/regexplanet/regexplanet-postgresql",
  status_url: "https://regexplanet-postgresql.gcr.regexplanet.com/status.json",
  test_url: "https://regexplanet-postgresql.gcr.regexplanet.com/test.json",
};
