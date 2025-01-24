import { languages } from "../src/languages.js";
import { themes } from "../src/themes.js";
import axios from "axios";
import { percents } from "../src/percents.js";

export default async function handler(request, response) {
  try {
    response.setHeader("Content-Type", "image/svg+xml");
    response.setHeader("Vercel-CDN-Cache-Control", "max-age=3600, stale-while-revalidate=604800");
    response.setHeader("CDN-Cache-Control", "max-age=3600, stale-while-revalidate=604800");
    response.setHeader("Cache-Control", "max-age=3600, stale-while-revalidate=604800");

    let languageName = request.query.language;

    if (languageName === undefined) {
      throw new Error(`"language" is not defined`);
    }

    const language = languages[languageName.toLowerCase()];

    if (language === undefined) {
      throw new Error(`"${languageName}" is not a supported language`);
    }

    const themeName = request.query.theme ?? "dark";
    const theme = themes[themeName.replaceAll("-", "_")];

    if (theme === undefined) {
      throw new Error(`"${themeName}" is not a supported theme`);
    }

    languageName = language.name;
    const languageWidth = language.width;

    const sizes = (
      await axios({
        url: `https://${process.env.VERCEL_BRANCH_URL}/api/sizes`,
        headers: {
          Accept: "application/json",
        },
      })
    ).data;

    const percent = `${(((sizes[languageName] ?? 0) * 100) / sizes.totalSize).toFixed(1)}%`;
    const percentWidth = percents[percent];

    response.send(`
      <svg
        width="${28 + languageWidth + 4 + percentWidth + 8 + 4}"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0"
          y="0"
          width="${28 + languageWidth + 4 + percentWidth + 8}"
          height="24"
          rx="6"
          fill="${theme.backgroundColor}"
        ></rect>
        <circle cx="12" cy="12" r="4" fill="${language.color}"></circle>
        <text
          x="28"
          y="16"
          font-family="Arial, sans-serif"
          font-size="12"
          font-weight="600"
          fill="${theme.languageColor}"
        >
          ${languageName}
        </text>
        <text
          x="${28 + languageWidth + 4}"
          y="16"
          font-family="Arial, sans-serif"
          font-size="12"
          fill="${theme.percentColor}"
        >
          ${percent}
        </text>
      </svg>
    `);
  } catch (error) {
    response.setHeader("Content-Type", "text/plain");
    response.setHeader("Cache-Control", "no-store");
    response.send(error.message);
  }
}
