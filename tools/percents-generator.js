const text = document.querySelectorAll("text")[1];

let percents = {};
let longestPercent = { percent: "", width: 0 };

for (let integer = 0; integer <= 100; integer++) {
  for (let decimal = 0; decimal < 10; decimal++) {
    const percent = `${integer}.${decimal}%`;
    text.innerHTML = percent;

    const width = Math.round(text.getBBox().width);
    percents[percent] = width;

    if (width > longestPercent.width) {
      longestPercent = { percent: percent, width: width };
    }

    if (integer === 100) {
      break;
    }
  }
}

document.body.innerText = `
  const percents = ${JSON.stringify(percents)};

  const longestPercent = ${JSON.stringify(longestPercent)};

  export { percents, longestPercent };
`;
