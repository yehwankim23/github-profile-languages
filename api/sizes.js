import axios from "axios";

export default async function handler(_request, response) {
  try {
    response.setHeader("Content-Type", "application/json");
    response.setHeader("Vercel-CDN-Cache-Control", "s-maxage=86400, stale-while-revalidate=604800");
    response.setHeader("CDN-Cache-Control", "s-maxage=86400, stale-while-revalidate=604800");
    response.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate=604800");

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
    let sizes = { UTC: new Date().toUTCString(), totalSize: 0 };

    for (const node of axiosResponse.data.data.user.repositories.nodes) {
      for (const edge of node.languages.edges) {
        const languageName = edge.node.name;

        if (!ignore.includes(languageName)) {
          const size = edge.size;
          sizes.totalSize += size;
          sizes[languageName] = (sizes[languageName] ?? 0) + size;
        }
      }
    }

    response.send(JSON.stringify(sizes));
  } catch (error) {
    response.setHeader("Content-Type", "text/plain");
    response.setHeader("Cache-Control", "no-store");
    response.send(error.message);
  }
}
