import colors from "@primer/primitives/dist/js/colors";

let themes = {};

for (const themeName in colors) {
  const theme = colors[themeName];
  const buttonColor = theme.canvas.default;
  let barColor = theme.neutral.subtle;

  if (barColor.startsWith("rgba")) {
    const [red, green, blue, alpha] = barColor.slice(5, -1).split(",");

    barColor = `#${(
      Math.round(parseInt(buttonColor.slice(1, 3), 16) * (1 - alpha)) + Math.round(red * alpha)
    ).toString(16)}${(
      Math.round(parseInt(buttonColor.slice(3, 5), 16) * (1 - alpha)) + Math.round(green * alpha)
    ).toString(16)}${(
      Math.round(parseInt(buttonColor.slice(5), 16) * (1 - alpha)) + Math.round(blue * alpha)
    ).toString(16)}`;
  }

  themes[themeName] = {
    barColor: barColor,
    buttonColor: buttonColor,
    languageColor: theme.fg.default,
    percentColor: theme.fg.muted,
  };
}

document.body.innerText = `
  const themes = ${JSON.stringify(themes)};

  export { themes };
`;
