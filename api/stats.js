import axios from "axios";

export default async function handler(request, response) {
  try {
    response.setHeader("Content-Type", "text/html");
    response.setHeader("Cache-Control", "no-store");

    const token = process.env.GPL_TOKEN;

    if (token === undefined) {
      throw new Error(`"GPL_TOKEN" is not defined`);
    }

    const username = request.query.username ?? process.env.GPL_USERNAME;

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

    let sizes = { Total: 0 };

    for (const node of axiosResponse.data.data.user.repositories.nodes) {
      for (const edge of node.languages.edges) {
        const languageName = edge.node.name;
        const size = edge.size;
        sizes.Total += size;
        sizes[languageName] = (sizes[languageName] ?? 0) + size;
      }
    }

    sizes = new Map(
      Object.entries(sizes).sort(([_, a], [__, b]) => {
        return b - a;
      })
    );

    let stats = "";

    for (const [languageName, size] of sizes) {
      stats += `
        <tr>
          <td>${languageName}</td>
          <td>${new Intl.NumberFormat().format(size)}</td>
          <td>${((size * 100) / sizes.get("Total")).toFixed(1)}</td>
        </tr>
      `;
    }

    response.send(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>GitHub Profile Languages - Language Stats</title>
          <style>
            body {
              margin: 32px;
              background-color: #222;
              font-family: Consolas, Menlo, monospace;
              font-size: 16px;
              color: #ddd;
            }
            table {
              border-collapse: collapse;
            }
            th,
            td {
              border: 1px solid #ddd;
              padding: 8px;
            }
            td:nth-child(n + 2) {
              text-align: right;
            }
          </style>
        </head>
        <body>
          <table>
            <tr>
              <th>Languages</th>
              <th>Bytes</th>
              <th>Percentages</th>
            </tr>
            ${stats}
          </table>
        </body>
      </html>
    `);
  } catch (error) {
    response.setHeader("Content-Type", "text/plain");
    response.setHeader("Cache-Control", "no-store");
    response.send(error.message);
  }
}
