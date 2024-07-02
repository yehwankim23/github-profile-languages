import { longestLanguage } from "../src/languages";
import { longestPercent } from "../src/percents";
import { themes } from "../src/themes";

const theme = themes.dark;

document.body.innerHTML = `
  <svg
    width="${28 + longestLanguage.width + 4 + longestPercent.width + 8 + 4}"
    height="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0"
      y="0"
      width="${28 + longestLanguage.width + 4 + longestPercent.width + 8}"
      height="24"
      rx="4"
      fill="${theme.backgroundColor}"
    ></rect>
    <circle cx="12" cy="12" r="4" fill="${longestLanguage.color}"></circle>
    <text
      x="28"
      y="16"
      font-family="Arial, sans-serif"
      font-size="12"
      font-weight="600"
      fill="${theme.languageColor}"
    >
      ${longestLanguage.name}
    </text>
    <text
      x="${28 + longestLanguage.width + 4}"
      y="16"
      font-family="Arial, sans-serif"
      font-size="12"
      fill="${theme.percentColor}"
    >
      ${longestPercent.percent}
    </text>
  </svg>
`;
