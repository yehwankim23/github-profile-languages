import axios from "axios";
import yaml from "js-yaml";

const text = document.querySelector("text");

const linguist = yaml.load(
  (
    await axios({
      method: "get",
      url: "https://raw.githubusercontent.com/github-linguist/linguist/refs/heads/main/lib/linguist/languages.yml",
    })
  ).data
);

let languages = {};
let longestLanguage = { name: "", width: 0, color: "" };

for (const languageName in linguist) {
  if (!/[ -~]/.test(languageName)) {
    console.log("Name:", languageName);
    continue;
  }

  let color = linguist[languageName].color?.toLowerCase();

  if (color === undefined) {
    console.log("Color:", languageName);
    continue;
  }

  text.innerHTML = languageName;

  const width = Math.round(text.getBBox().width);
  languages[languageName.toLowerCase()] = { name: languageName, width: width, color: color };

  if (width > longestLanguage.width) {
    longestLanguage = { name: languageName, width: width, color: color };
  }
}

document.body.innerText = `
  const languages = ${JSON.stringify(languages)};

  const longestLanguage = ${JSON.stringify(longestLanguage)};

  export { languages, longestLanguage };
`;
