import type { RegexEngine } from "./RegexEngine";

export const postgresql: RegexEngine = {
  description: "regexp_* functions",
  enabled: true,
  help_label: "Pattern Matching docs",
  help_url:
    "https://www.postgresql.org/docs/current/static/functions-matching.html",
  handle: "postgresql",
  level: "alpha",
  links: {
    a: "https://b",
  },
  logo_icon: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
  logo_ar21: "https://www.vectorlogo.zone/logos/postgresql/postgresql-ar21.svg",
  nodeping_url:
    "https://nodeping.com/reports/checks/43ytdj0n-jeiu-4zta-8ptc-wr7xmxztp5i8",
  options: {},
  short_name: "PostgreSQL",
  source_url: "https://github.com/regexplanet/regexplanet-postgresql",
  status_url: "https://regexplanet-postgresql.herokuapp.com/status.json",
  test_url: "https://regexplanet-postgresql.herokuapp.com/test.json",
};
