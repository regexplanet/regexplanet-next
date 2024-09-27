import type { RegexEngine } from "./RegexEngine";

export const rust: RegexEngine = {
  description: "regex crate",
  enabled: true,
  help_label: "docs.rs",
  help_url: "https://docs.rs/regex/latest/regex/",
  handle: "rust",
  level: "alpha",
  links: {
    "Struct regex::Regex":
      "https://docs.rs/regex/latest/regex/struct.Regex.html",
    "Struct regex::RegexBuilder":
      "https://docs.rs/regex/latest/regex/struct.RegexBuilder.html",
  },
  logo_icon: "https://www.vectorlogo.zone/logos/rust-lang/rust-lang-icon.svg",
  logo_ar21: "https://www.vectorlogo.zone/logos/rust-lang/rust-lang-ar21.svg",
  nodeping_url:
    "https://nodeping.com/reports/checks/ujhwq5rz-ozzd-4uj7-8jth-4osxplhcw4j2",
  options: [],
  option_notes: `Rust supports options in the regex pattern and with separate calls to <a href="https://docs.rs/regex/latest/regex/struct.RegexBuilder.html">RegexBuilder</a>.`,
  short_name: "Rust",
  source_url: "https://github.com/regexplanet/regexplanet-rust",
  status_url: "https://rust.gcr.regexplanet.com/status.json",
  test_url: "https://rust.gcr.regexplanet.com/test.json",
};
