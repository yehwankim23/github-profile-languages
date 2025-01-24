import axios from "axios";

export default async function handler(_request, response) {
  try {
    response.setHeader("Content-Type", "text/html");
    response.setHeader("Cache-Control", "no-store");

    const token = process.env.GPL_TOKEN;

    if (token === undefined) {
      throw new Error(`"GPL_TOKEN" is not defined`);
    }

    const username = process.env.GPL_USERNAME;

    if (username === undefined) {
      throw new Error(`"GPL_USERNAME" is not defined`);
    }

    const axiosResponse = await axios({
      method: "post",
      url: "https://api.github.com/graphql",
      headers: {
        Authorization: `bearer ${token}`,
      },
      data: {
        query: `
          query {
            user(login: "${username}") {
              repositories(isFork: false, first: 100, orderBy: { direction: DESC, field: PUSHED_AT },
                  ownerAffiliations: OWNER, privacy: PUBLIC) {
                nodes {
                  languages(first: 10, orderBy: { direction: DESC, field: SIZE }) {
                    edges {
                      size
                      node {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        `,
      },
    });

    const ignore = (process.env.GPL_IGNORE ?? "").split(",");
    let sizes = {};

    for (const node of axiosResponse.data.data.user.repositories.nodes) {
      for (const edge of node.languages.edges) {
        const languageName = edge.node.name;

        if (!ignore.includes(languageName)) {
          sizes[languageName] = (sizes[languageName] ?? 0) + edge.size;
        }
      }
    }

    sizes = new Map(
      Object.entries(sizes).sort(([_request, a], [__, b]) => {
        return b - a;
      })
    );

    const github = `https://github.com/${username}?tab=repositories`;
    const api = `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/api`;

    let readme = `
### Languages

<p>
  <a href="${github}">
    <picture>
      <source
        media="(prefers-color-scheme: light)"
        srcset="${api}/bar?width=846&theme=light"
      />
      <img
        src="${api}/bar?width=846&theme=dark"
        alt="Repositories"
      />
    </picture>
  </a>
</p>

<p>
`;

    for (const [languageName, _] of sizes) {
      const escapedLanguageName = encodeURIComponent(languageName.toLowerCase());

      readme += `  <a href="${github}&language=${escapedLanguageName.replaceAll("%20", "+")}">
    <picture>
      <source
        media="(prefers-color-scheme: light)"
        srcset="${api}/button?language=${escapedLanguageName}&theme=light"
      />
      <img
        src="${api}/button?language=${escapedLanguageName}&theme=dark"
        alt="${languageName}"
      />
    </picture>
  </a>
`;
    }

    readme += "</p>";

    readme = readme
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll(`"`, "&quot;")
      .replaceAll("'", "&apos;");

    response.send(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>GitHub Profile Languages - README Generator</title>
          <style>
            body {
              margin: 32px;
              background-color: #222;
            }
            pre {
              font-family: Consolas, Menlo, monospace;
              font-size: 16px;
              color: #ddd;
            }
          </style>
        </head>
        <body>
          <pre>${readme}</pre>
        </body>
      </html>
    `);
  } catch (error) {
    response.setHeader("Content-Type", "text/plain");
    response.setHeader("Cache-Control", "no-store");
    response.send(error.message);
  }
}
