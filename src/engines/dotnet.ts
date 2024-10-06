import type { RegexEngine } from "./RegexEngine";

export const dotnet: RegexEngine = {
  description: "System.Text.RegularExpressions.Regex",
  enabled: true,
  help_label: "MSDN",
  help_url:
    "https://learn.microsoft.com/en-us/dotnet/api/system.text.regularexpressions?view=net-8.0",
  handle: "dotnet",
  level: "alpha",
  links: {
    "Learn .NET regular expressions":
      "https://learn.microsoft.com/en-us/dotnet/standard/base-types/regular-expressions",
    "Quick Reference":
      "https://learn.microsoft.com/en-us/dotnet/standard/base-types/regular-expressions#reference",
    "Best Practices":
      "https://learn.microsoft.com/en-us/dotnet/standard/base-types/best-practices-regex",
    " Behavior details":
      "https://learn.microsoft.com/en-us/dotnet/standard/base-types/details-of-regular-expression-behavior",
  },
  logo_icon: "https://www.vectorlogo.zone/logos/dotnet/dotnet-icon.svg",
  logo_ar21: "https://www.vectorlogo.zone/logos/dotnet/dotnet-ar21.svg",
  options: [],
  short_name: ".NET",
};