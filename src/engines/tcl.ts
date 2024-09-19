import type { RegexEngine } from "./RegexEngine";

export const tcl: RegexEngine = {
  description: "regexp command",
  enabled: true,
  help_label: "Tcl8.5 regexp docs",
  help_url: "http://www.tcl.tk/man/tcl8.5/TclCmd/regexp.htm",
  handle: "tcl",
  level: "beta",
  links: {
  },
  logo_icon: "https://www.vectorlogo.zone/logos/tcl/tcl-icon.svg",
  logo_ar21: "https://www.vectorlogo.zone/logos/tcl/tcl-ar21.svg",
  nodeping_url:
    "https://nodeping.com/reports/checks/kk4u50sh-kave-4wwx-8f2i-74tgnum8szwa",
  options: {},
  short_name: "TCL",
  source_url: "https://github.com/regexplanet/regexplanet-tcl",
  status_url: "https://tcl.gcr.regexplanet.com/status.tcl",
  test_url: "https://tcl.gcr.regexplanet.com/test.tcl",
};
