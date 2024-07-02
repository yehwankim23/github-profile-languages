import axios from "axios";
import { themes } from "../src/themes.js";
import { languages } from "../src/languages.js";

export default async function handler(request, response) {
  try {
    response.setHeader("Content-Type", "image/svg+xml");
    response.setHeader("Vercel-CDN-Cache-Control", "max-age=3600, stale-while-revalidate=604800");
    response.setHeader("CDN-Cache-Control", "max-age=3600, stale-while-revalidate=604800");
    response.setHeader("Cache-Control", "max-age=3600, stale-while-revalidate=604800");

    const width = request.query.width;

    if (width === undefined) {
      throw new Error(`"width" is not defined`);
    }

    const outerWidth = parseInt(width);

    if (outerWidth === NaN || outerWidth <= 0) {
      throw new Error(`"${width}" is not a valid width`);
    }

    const themeName = request.query.theme ?? "dark";
    const theme = themes[themeName.replaceAll("-", "_")];

    if (theme === undefined) {
      throw new Error(`"${themeName}" is not a supported theme`);
    }

    let sizes = new Map(
      Object.entries(
        (
          await axios({
            url: `https://${process.env.VERCEL_BRANCH_URL}/api/sizes`,
            headers: {
              Accept: "application/json",
            },
          })
        ).data
      ).sort(([_, a], [__, b]) => {
        return a - b;
      })
    );

    sizes.delete("UTC");
    let totalSize = sizes.get("totalSize");
    sizes.delete("totalSize");

    for (const [languageName, size] of sizes) {
      if (((outerWidth - 2 * (sizes.size - 1)) * size) / totalSize < 2) {
        sizes.delete(languageName);
        totalSize -= size;
      } else {
        break;
      }
    }

    sizes = new Map(
      [...sizes.entries()].sort(([_, a], [__, b]) => {
        return b - a;
      })
    );

    const innerWidth = outerWidth - 2 * (sizes.size - 1);
    let rects = "";
    let x = 0;

    for (const [languageName, size] of sizes) {
      const language = languages[languageName];

      if (language === undefined) {
        throw new Error(`"${languageName}" is not a supported language`);
      }

      const width = (innerWidth * size) / totalSize;

      rects += `
        <rect
          x="${x}"
          y="0"
          width="${width}"
          height="8"
          fill="${language.color}"
          mask="url(#mask)"
        ></rect>
      `;

      x += width + 2;
    }

    response.send(`
      <svg width="${outerWidth}" height="8" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask">
          <rect x="0" y="0" width="${outerWidth}" height="8" rx="4" fill="#ffffff"></rect>
        </mask>
        <rect
          x="0"
          y="0"
          width="${outerWidth}"
          height="8"
          fill="${theme.backgroundColor}"
          mask="url(#mask)"
        ></rect>
        ${rects}
      </svg>
    `);
  } catch (error) {
    response.setHeader("Content-Type", "text/plain");
    response.setHeader("Cache-Control", "no-store");
    response.send(error.message);
  }
}
