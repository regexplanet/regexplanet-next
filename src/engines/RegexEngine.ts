

type RegexEngine = {
  description: string;
  enabled: boolean;
  help_label: string;
  help_url: string;
  handle: string;
  level: "alpha" | "beta" | "golden";
  links: Record<string, string>;
  logo_icon: string;
  logo_ar21: string;
  nodeping_url: string;
  notfound?: string[];
  options: Record<string, string>;
  short_name: string;
  source_url: string;
  status_url: string;
  test_url: string;
};

export { 
    type RegexEngine,
}