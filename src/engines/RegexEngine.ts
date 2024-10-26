type PortableCodes = "ignorecase" | "multiline" | "comments" | "dotall";

export type RegexOption = {
  code: string;
  legacyCode?: string; // for the original RegexPlanet backends
  portableCode?: PortableCodes; // for translating this code when switching to other engines
  numericCode?: number; // the value for engines that use a numeric bitmask for options
  description: string;
};

export type RegexExtraInput = {
  name: string; // name of the form field (used in the POST request)
  prompt: string; // text to display to the user
  element: JSX.Element; // the input element to display to gather the input
  help: string; // text to display to the user to help them fill out the form
  defaultValue: string; // the default value to use if the user doesn't provide one
};

export type RegexEngine = {
  description: string; // library or module name (do not include `short_name`)
  enabled: boolean; // always true for now
  extra_inputs?: RegexExtraInput[]; // A list of extra inputs to gather from the user
  help_label: string; // text for the help button on the testing page
  help_url: string; // URL destination for the help button on the testing page
  handle: string; // unique identifier for the language or engine used as the slug in URLs
  level: "alpha" | "beta" | "golden" | "notimplemented"; // The level of support for this engine
  links: Record<string, string>; // A map of (name: url) for other help links. These will be displayed on the support page under “Official Documentation”
  logo_icon: string; // SVG icon (just the logo, no text) in a square
  logo_ar21: string; // SVG logo (including language name) in a 2:1 aspect ratio
  nodeping_url?: string; // URL of the nodeping status page
  notfound?: string[]; // A list of handles that this is a substitute for (i.e. nodejs is a substitute for javascript)
  options: RegexOption[]; // A list of which options it supports.
  option_notes?: string; // Notes to display on the options page (html allowed)
  short_name: string; // Name of the language or engine
  source_url?: string; // URL of source code
  status_url?: string; // URL of the status endpoint
  test_url?: string; // URL of the test endpoint
};
