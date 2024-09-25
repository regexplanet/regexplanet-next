export async function GET(request: Request) {

    let robotsTxt = `#
# robots.txt - not running on www yet, so don't index anything
#
User-agent: *
Disallow: /
`;

    if (request.headers.get("Host") === "www.regexplanet.com") {
        robotsTxt = `#
# almost empty: everything at RegexPlanet is indexable!
#
Sitemap: https://www.regexplanet.com/sitemap.xml

User-agent: *
Disallow: /honeypot.txt
`
    }

    return new Response(robotsTxt, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
}
