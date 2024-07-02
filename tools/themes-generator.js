import light from "@primer/primitives/dist/docs/functional/themes/light.json";
import light_high_contrast from "@primer/primitives/dist/docs/functional/themes/light-high-contrast.json";
import light_colorblind from "@primer/primitives/dist/docs/functional/themes/light-colorblind.json";
import light_tritanopia from "@primer/primitives/dist/docs/functional/themes/light-tritanopia.json";
import dark from "@primer/primitives/dist/docs/functional/themes/dark.json";
import dark_dimmed from "@primer/primitives/dist/docs/functional/themes/dark-dimmed.json";
import dark_high_contrast from "@primer/primitives/dist/docs/functional/themes/dark-high-contrast.json";
import dark_colorblind from "@primer/primitives/dist/docs/functional/themes/dark-colorblind.json";
import dark_tritanopia from "@primer/primitives/dist/docs/functional/themes/dark-tritanopia.json";

let themes = {};

for (const [themeName, theme] of [
  ["light", light],
  ["light_high_contrast", light_high_contrast],
  ["light_colorblind", light_colorblind],
  ["light_tritanopia", light_tritanopia],
  ["dark", dark],
  ["dark_dimmed", dark_dimmed],
  ["dark_high_contrast", dark_high_contrast],
  ["dark_colorblind", dark_colorblind],
  ["dark_tritanopia", dark_tritanopia],
]) {
  themes[themeName] = {
    backgroundColor: theme["bgColor-default"].value,
    languageColor: theme["fgColor-default"].value,
    percentColor: theme["fgColor-muted"].value,
  };
}

document.body.innerText = `
  const themes = ${JSON.stringify(themes)};

  export { themes };
`;
