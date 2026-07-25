import type { RegexEngine } from "./RegexEngine";

export const mysql: RegexEngine = {
  description: "REGEXP/RLIKE operator and REGEXP_*() functions",
  enabled: true,
  help_label: "MySQL Reference Manual",
  help_url: "https://dev.mysql.com/doc/refman/9.7/en/regexp.html",
  handle: "mysql",
  level: "beta",
  links: {},
  logo_icon: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg",
  logo_ar21: "https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg",
  nodeping_uuid: "RPVXT31W-FUZ5-410J-8YOA-Q6NROZGW0Z0C",
  nodeping_id: "201109281250J5K3P-32TF6XRC",
  notfound: ["mariadb"],
  options: [
    {
      code: "c",
      description: "Case-sensitive matching",
    },
    {
      code: "i",
      portableCode: "ignorecase",
      description: "Case-insensitive matching",
    },
    {
      code: "m",
      description:
        "Multiple-line mode. Recognize line terminators within the string. The default behavior is to match line terminators only at the start and end of the string expression.",
    },
    {
      code: "n",
      description:
        "The . character matches line terminators. The default is for . matching to stop at the end of a line. ",
    },
    {
      code: "u",
      description:
        "Unix-only line endings. Only the newline character is recognized as a line ending by the ., ^, and $ match operators. ",
    },
  ],
  short_name: "MySQL",
  source_url: "https://github.com/regexplanet/regexplanet-mysql",
  status_url: "https://mysql.gcr.regexplanet.com/status.json",
  test_url: "https://mysql.gcr.regexplanet.com/test.json",
};
