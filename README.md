# GitHub Profile Languages

API that generates GitHub-themed SVGs that show the percentage of a language in public repositories

Inspired by [GitHub Readme Stats](https://github.com/anuraghazra/github-readme-stats) and [Shields.io](https://github.com/badges/shields)

## Preview

[My GitHub profile README](https://github.com/yehwankim23/yehwankim23)

### Dark Themes

Language Bar:

![Language bar preview (dark)](https://github-profile-languages.vercel.app/api/bar?width=830&theme=dark)

Language Button (default, high contrast, dimmed):

![Language button preview (dark default)](https://github-profile-languages.vercel.app/api/button?language=javascript&theme=dark)![Language button preview (dark high contrast)](https://github-profile-languages.vercel.app/api/button?language=javascript&theme=dark_high_contrast)![Language button preview (dark dimmed)](https://github-profile-languages.vercel.app/api/button?language=javascript&theme=dark_dimmed)

### Light Themes

Language Bar:

![Language bar preview (light)](https://github-profile-languages.vercel.app/api/bar?width=830&theme=light)

Language Button (default, high contrast):

![Language button preview (light default)](https://github-profile-languages.vercel.app/api/button?language=javascript&theme=light)![Language button preview (light high contrast)](https://github-profile-languages.vercel.app/api/button?language=javascript&theme=light_high_contrast)

## Deployment

1. [Fork this repository](https://github.com/yehwankim23/github-profile-languages/fork)

2. [Generate a GitHub personal access token](https://github.com/settings/tokens/new) with `public_repo` permission

![Deployment 2](images/deployment-02.png)

3. Go to [Vercel](https://vercel.com/login) and `Continue with GitHub`

![Deployment 3](images/deployment-03.png)

4. Click `Add New...` > `Project`

![Deployment 4](images/deployment-04.png)

5. Find your repository and click `Import`

![Deployment 5](images/deployment-05.png)

6. Click `Environment Variables` and add `GPL_TOKEN` and `GPL_USERNAME`

![Deployment 6](images/deployment-06.png)

7. (Optional) Add languages that you want to ignore as comma-separated values (no spaces)

> [Supported languages](/src/languages.js)

![Deployment 7](images/deployment-07.png)

8. Click `Deploy`

9. Click `Continue to Dashboard`

10. Check your domains under `DOMAINS`

![Deployment 10](images/deployment-10.png)

## Usage

### Language Bar

Copy and paste the following Markdown and change `DOMAIN`, `WIDTH`, and `THEME`

> [Supported themes](/src/themes.js)

```md
![GitHub Profile Languages - Bar](DOMAIN/api/bar?width=WIDTH&theme=THEME)
```

Example:

- `DOMAIN` → `https://github-profile-languages.vercel.app`
- `WIDTH` → `830`
- `THEME` → `dark`

```md
![GitHub Profile Languages - Bar](https://github-profile-languages.vercel.app/api/bar?width=830&theme=dark)
```

Result:

![GitHub Profile Languages - Bar](https://github-profile-languages.vercel.app/api/bar?width=830&theme=dark)

### Language Button

Copy and paste the following Markdown and change `DOMAIN`, `LANGUAGE`, and `THEME`

> [Supported languages](/src/languages.js)

> [Supported themes](/src/themes.js)

```md
![GitHub Profile Languages - Button](DOMAIN/api/button?language=LANGUAGE&theme=THEME)
```

Example:

- `DOMAIN` → `https://github-profile-languages.vercel.app`
- `LANGUAGE` → `C%2b%2b` ([Percent-encoded](#percent-encoding) "C++")
- `THEME` → `dark`

```md
![GitHub Profile Languages - Button](https://github-profile-languages.vercel.app/api/button?language=C%2b%2b&theme=dark)
```

Result:

![GitHub Profile Languages - Button](https://github-profile-languages.vercel.app/api/button?language=C%2b%2b&theme=dark)

### Language Stats

Visit `DOMAIN/api/stats` for raw language statistics

Example:

- `DOMAIN` → `https://github-profile-languages.vercel.app`

[https://github-profile-languages.vercel.app/api/stats](https://github-profile-languages.vercel.app/api/stats)

Result:

![Usage (language stats)](images/usage-language-stats.png)

### README Generator

Visit `DOMAIN/api/readme` to generate a README file

Example:

- `DOMAIN` → `https://github-profile-languages.vercel.app`

[https://github-profile-languages.vercel.app/api/readme](https://github-profile-languages.vercel.app/api/readme)

Result:

![Usage (README generator)](images/usage-readme-generator.png)

### Percent-encoding

| ASCII | 2x  | ASCII | 3x  | ASCII | 4x  | ASCII | 5x  | ASCII | 6x  | ASCII | 7x  |
| ----- | --- | ----- | --- | ----- | --- | ----- | --- | ----- | --- | ----- | --- |
| space | %20 | :     | %3a | @     | %40 | [     | %5b | `     | %60 | {     | %7b |
| !     | %21 | ;     | %3b |       |     | \     | %5c |       |     | \|    | %7c |
| "     | %22 | <     | %3c |       |     | ]     | %5d |       |     | }     | %7d |
| #     | %23 | =     | %3d |       |     | ^     | %5e |       |     | ~     | %7e |
| $     | %24 | >     | %3e |       |     | \_    | %5f |
| %     | %25 | ?     | %3f |
| &     | %26 |
| '     | %27 |
| (     | %28 |
| )     | %29 |
| \*    | %2a |
| +     | %2b |
| ,     | %2c |
| -     | %2d |
| .     | %2e |
| /     | %2f |
