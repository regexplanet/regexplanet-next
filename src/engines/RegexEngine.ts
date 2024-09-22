type RegexOption = {
  code: string;
  value: string | number;
  description: string;
  portable?: string;
};

type RegexEngine = {
  description: string; // library or module name (do not include `short_name`)
  enabled: boolean; // always true for now
  help_label: string; // text for the help button on the testing page
  help_url: string; // URL destination for the help button on the testing page
  handle: string; // unique identifier for the language or engine used as the slug in URLs
  level: "alpha" | "beta" | "golden";
  links: Record<string, string>; // A map of (name: url) for other help links. These will be displayed on the support page under “Official Documentation”
  logo_icon: string; // SVG icon (just the logo, no text) in a square
  logo_ar21: string; // SVG logo (including language name) in a 2:1 aspect ratio
  nodeping_url: string; // URL of the nodeping status page
  notfound?: string[]; // A list of handles that this is a substitute for (i.e. nodejs is a substitute for javascript)
  options: RegexOption[]; // A list of which options it supports.
  option_notes?: string; // Notes to display on the options page (html allowed)
  short_name: string; // Name of the language or engine
  source_url: string; // URL of source code
  status_url: string; // URL of the status endpoint
  test_url: string; // URL of the test endpoint
};

export { type RegexEngine };
