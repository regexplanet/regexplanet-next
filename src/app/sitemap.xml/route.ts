
import { getEngines } from "@/engines";

const ROOT = "https://www.regexplanet.com";

export async function GET() {
  const urls = [
    `${ROOT}/`,
    `${ROOT}/status.html`,
    `${ROOT}/support/index.html`,
  ];

  getEngines().forEach((engine) => {
    urls.push(`${ROOT}/advanced/${engine.handle}/index.html`);
  });

  const body = urls.map((url) => `\t<url><loc>${url}</loc></url>`).join("\n");

  const text = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xslt" ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>`;

  return new Response(text, {
    status: 200,
    headers: { "Content-Type": "application/xml" },
  });

  
}
