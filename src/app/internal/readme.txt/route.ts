/*
 * build a README.txt for the regexplanet git org
 */

import { getWorkingEngines } from "@/engines";

type Project = {
  name: string;
  nodeping_id?: string;
  workflow: string;
  source_url: string;
  url?: string;
  test_url?: string;
};

const non_engine_projects: Project[] = [
  {
    name: "Regexplanet main website",
    nodeping_id: "e6od3bui-a5wl-49ff-8698-0cbtjc52rqw1",
    source_url: "https://github.com/regexplanet/regexplanet-next",
    url: "https://www.regexplanet.com/",
    workflow: "gcr-deploy",
  },
  {
    name: "Regex Zone",
    nodeping_id: "e6od3bui-a5wl-49ff-8698-0cbtjc52rqw1",
    source_url: "https://github.com/regexplanet/regex-zone",
    url: "https://www.regex.zone/",
    workflow: "gcr-deploy",
  },
];

const make_row = (project: Project) => {
  const name = project.url ? `[${project.name}](${project.url})` : project.name;
  const deploy = project.workflow
    ? `[![${project.workflow}](${project.source_url}/actions/workflows/${project.workflow}.yaml/badge.svg)](${project.source_url}/actions/workflows/${project.workflow}.yaml)`
    : "n/a";
  const repo = project.source_url.split("/").slice(-1)[0];
  const issues = `![GitHub Issues](https://img.shields.io/github/issues/regexplanet/${repo})`;
  const prs = `![GitHub Issues or Pull Requests](https://img.shields.io/github/issues-pr/regexplanet/${repo})`;
  const status = project.nodeping_id
    ? `![NodePing status](https://img.shields.io/nodeping/status/${project.nodeping_id})`
    : "n/a";
  const uptime = project.nodeping_id
    ? `![NodePing uptime](https://img.shields.io/nodeping/uptime/${project.nodeping_id})`
    : "n/a";
  const source = `[source](${project.source_url})`;

  return `| ${name} | ${deploy} | ${issues} | ${prs} | ${status} | ${uptime} | ${source} |`;
};

export async function GET() {
  const engines = getWorkingEngines()
    .filter((engine) => engine.nodeping_id != "N/A")
    .map((engine) => {
      return make_row({
        name: `${engine.short_name} testing backend`,
        nodeping_id: engine.nodeping_id,
        source_url: engine.source_url || "",
        test_url: engine.test_url,
        url: `https://www.regexplanet.com/advanced/${engine.handle}/index.html`,
        workflow:
          engine.test_url && engine.test_url.indexOf("appspot.com") != -1
            ? "appengine-deploy"
            : "gcr-deploy",
      });
    });

  const readme = `# Regexplanet 

| Project | Build | Issues | PRs | Status | Uptime | Source |
|---------|-------|--------|-----|--------|--------|--------|
${non_engine_projects.map(make_row).join("\n")}
${engines.join("\n")}
${make_row({
  name: "Common library",
  source_url: "https://github.com/regexplanet/regexplanet-common",
  url: "https://jsr.io/@regexplanet/common",
  workflow: "publish",
})}
${make_row({
  name: "Javascript Template",
  source_url: "https://github.com/regexplanet/regexplanet-template",
  url: "https://jsr.io/@regexplanet/template",
  workflow: "publish",
})}
`;

  return new Response(readme, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
