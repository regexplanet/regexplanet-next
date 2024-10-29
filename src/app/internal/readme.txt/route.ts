/*
 * build a README.txt for the regexplanet git org
 */

import { getWorkingEngines } from "@/engines";

type Project = {
  name: string;
  nodeping_id: string;
  source_url: string;
  url: string;
  test_url?: string;
};

const non_engine_projects: Project[] = [
  {
    name: "Regexplanet main website",
    nodeping_id: "e6od3bui-a5wl-49ff-8698-0cbtjc52rqw1",
    source_url: "https://github.com/regexplanet/regexplanet-next",
    url: "https://www.regexplanet.com/",
  },
  {
    name: "Regex Zone",
    nodeping_id: "e6od3bui-a5wl-49ff-8698-0cbtjc52rqw1",
    source_url: "https://github.com/regexplanet/regex-zone",
    url: "https://www.regex.zone/",
  },
];

const make_row = (project: Project) => {
  const name = `[${project.name}](${project.url})`;
  let deploy = `[![deploy](${project.source_url}/actions/workflows/gcr-deploy.yaml/badge.svg)](${project.source_url}/actions/workflows/gcr-deploy.yaml)`;
  if (project.test_url && project.test_url.indexOf("appspot.com") != -1) {
    deploy = `[![build](${project.source_url}/actions/workflows/appengine-deploy.yaml/badge.svg)](${project.source_url}/actions/workflows/appengine-deploy.yaml)`;
  }
  const repo = project.source_url.split("/").slice(-1)[0];
  const issues = `![GitHub Issues](https://img.shields.io/github/issues/regexplanet/${repo})`;
  const prs = `![GitHub Issues or Pull Requests](https://img.shields.io/github/issues-pr/regexplanet/${repo})`;
  const status = `![NodePing status](https://img.shields.io/nodeping/status/${project.nodeping_id})`;
  const uptime = `![NodePing uptime](https://img.shields.io/nodeping/uptime/${project.nodeping_id})`;
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
      });
    });

  const readme = `# Regexplanet 

| Project | Build | Issues | PRs | Status | Uptime | Source |
|---------|-------|--------|-----|--------|--------|--------|
${non_engine_projects.map(make_row).join("\n")}
${engines.join("\n")}
| Common library | n/a | n/a | n/a | [source](https://github.com/regexplanet/regexplanet-common) |
`;

  return new Response(readme, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
