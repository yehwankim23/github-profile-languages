const languages = {
  "1C Enterprise": { width: 78, color: "#814ccc" },
  "2-Dimensional Array": { width: 117, color: "#38761d" },
  "4D": { width: 17, color: "#004289" },
  ABAP: { width: 35, color: "#e8274b" },
  "ABAP CDS": { width: 63, color: "#555e25" },
  "AGS Script": { width: 65, color: "#b9d9ff" },
  AIDL: { width: 30, color: "#34eb6b" },
  AL: { width: 18, color: "#3aa2b5" },
  AMPL: { width: 36, color: "#e6efbb" },
  ANTLR: { width: 42, color: "#9dc3ff" },
  "API Blueprint": { width: 78, color: "#2acca8" },
  APL: { width: 26, color: "#5a8164" },
  "ASP.NET": { width: 52, color: "#9400ff" },
  ATS: { width: 24, color: "#1ac620" },
  ActionScript: { width: 73, color: "#882b0f" },
  Ada: { width: 24, color: "#02f88c" },
  "Adblock Filter List": { width: 107, color: "#800000" },
  "Adobe Font Metrics": { width: 113, color: "#fa0f00" },
  Agda: { width: 31, color: "#315665" },
  Alloy: { width: 31, color: "#64c800" },
  "Alpine Abuild": { width: 78, color: "#0d597f" },
  "Altium Designer": { width: 94, color: "#a89663" },
  AngelScript: { width: 69, color: "#c7d7dc" },
  "Ant Build System": { width: 101, color: "#a9157e" },
  Antlers: { width: 43, color: "#ff269e" },
  ApacheConf: { width: 73, color: "#d12127" },
  Apex: { width: 31, color: "#1797c0" },
  "Apollo Guidance Computer": { width: 158, color: "#0b3d91" },
  AppleScript: { width: 69, color: "#101f1f" },
  Arc: { width: 21, color: "#aa2afe" },
  AsciiDoc: { width: 53, color: "#73a0c5" },
  AspectJ: { width: 48, color: "#a957b0" },
  Assembly: { width: 58, color: "#6e4c13" },
  Astro: { width: 33, color: "#ff5a03" },
  Asymptote: { width: 63, color: "#ff0000" },
  Augeas: { width: 45, color: "#9cc134" },
  AutoHotkey: { width: 69, color: "#6594b9" },
  AutoIt: { width: 37, color: "#1c3552" },
  "Avro IDL": { width: 51, color: "#0040ff" },
  Awk: { width: 26, color: "#c30e9b" },
  B4X: { width: 24, color: "#00e4ff" },
  BASIC: { width: 38, color: "#ff0000" },
  BQN: { width: 27, color: "#2b7067" },
  Ballerina: { width: 51, color: "#ff5000" },
  Batchfile: { width: 51, color: "#c1f12e" },
  Beef: { width: 27, color: "#a52f4e" },
  Berry: { width: 32, color: "#15a13c" },
  BibTeX: { width: 41, color: "#778899" },
  Bicep: { width: 33, color: "#519aba" },
  Bikeshed: { width: 53, color: "#5562ac" },
  Bison: { width: 33, color: "#6a463f" },
  BitBake: { width: 45, color: "#00bce4" },
  Blade: { width: 33, color: "#f7523f" },
  BlitzBasic: { width: 58, color: "#00ffae" },
  BlitzMax: { width: 49, color: "#cd6400" },
  Bluespec: { width: 54, color: "#12223c" },
  "Bluespec BH": { width: 74, color: "#12223c" },
  Boo: { width: 24, color: "#d4bec1" },
  Boogie: { width: 41, color: "#c80fa0" },
  Brainfuck: { width: 56, color: "#2f2530" },
  BrighterScript: { width: 82, color: "#66aabb" },
  Brightscript: { width: 69, color: "#662d91" },
  Browserslist: { width: 73, color: "#ffd539" },
  C: { width: 9, color: "#555555" },
  "C#": { width: 16, color: "#178600" },
  "C++": { width: 23, color: "#f34b7d" },
  "CAP CDS": { width: 54, color: "#0092d1" },
  CLIPS: { width: 35, color: "#00a300" },
  CMake: { width: 39, color: "#da3434" },
  COLLADA: { width: 59, color: "#f1a42b" },
  CSON: { width: 35, color: "#244776" },
  CSS: { width: 25, color: "#663399" },
  CSV: { width: 26, color: "#237346" },
  CUE: { width: 25, color: "#5886e1" },
  CWeb: { width: 34, color: "#00007a" },
  "Cabal Config": { width: 74, color: "#483465" },
  Caddyfile: { width: 54, color: "#22b638" },
  Cadence: { width: 50, color: "#00ef8b" },
  Cairo: { width: 31, color: "#ff4a48" },
  "Cairo Zero": { width: 61, color: "#ff4a48" },
  CameLIGO: { width: 63, color: "#3be133" },
  "Cap'n Proto": { width: 68, color: "#c42727" },
  Carbon: { width: 42, color: "#222222" },
  Ceylon: { width: 40, color: "#dfa535" },
  Chapel: { width: 40, color: "#8dc63f" },
  ChucK: { width: 39, color: "#3f8000" },
  Circom: { width: 42, color: "#707575" },
  Cirru: { width: 29, color: "#ccccff" },
  Clarion: { width: 41, color: "#db901e" },
  Clarity: { width: 38, color: "#5546ff" },
  "Classic ASP": { width: 70, color: "#6a40fd" },
  Clean: { width: 33, color: "#3f85af" },
  Click: { width: 29, color: "#e4e6f3" },
  Clojure: { width: 42, color: "#db5855" },
  "Closure Templates": { width: 107, color: "#0d948f" },
  "Cloud Firestore Security Rules": { width: 176, color: "#ffa000" },
  CodeQL: { width: 47, color: "#140f46" },
  CoffeeScript: { width: 72, color: "#244776" },
  ColdFusion: { width: 66, color: "#ed2cd6" },
  "ColdFusion CFC": { width: 94, color: "#ed2cd6" },
  "Common Lisp": { width: 81, color: "#3fb68b" },
  "Common Workflow Language": { width: 169, color: "#b5314c" },
  "Component Pascal": { width: 108, color: "#b0ce4e" },
  Coq: { width: 23, color: "#d0b68c" },
  Crystal: { width: 41, color: "#000100" },
  Csound: { width: 45, color: "#1a1a1a" },
  "Csound Document": { width: 108, color: "#1a1a1a" },
  "Csound Score": { width: 82, color: "#1a1a1a" },
  Cuda: { width: 30, color: "#3a4e3a" },
  Curry: { width: 32, color: "#531242" },
  Cylc: { width: 26, color: "#00b3fd" },
  Cypher: { width: 43, color: "#34c0eb" },
  Cython: { width: 41, color: "#fedf5b" },
  D: { width: 9, color: "#ba595e" },
  D2: { width: 16, color: "#526ee8" },
  DM: { width: 19, color: "#447265" },
  Dafny: { width: 34, color: "#ffec25" },
  "Darcs Patch": { width: 69, color: "#8eff23" },
  Dart: { width: 25, color: "#00b4ab" },
  DataWeave: { width: 64, color: "#003a52" },
  "Debian Package Control File": { width: 162, color: "#d70751" },
  DenizenScript: { width: 81, color: "#fbee96" },
  Dhall: { width: 29, color: "#dfafff" },
  "DirectX 3D File": { width: 85, color: "#aace60" },
  Dockerfile: { width: 58, color: "#384d54" },
  Dogescript: { width: 64, color: "#cca760" },
  Dotenv: { width: 41, color: "#e5d559" },
  Dune: { width: 30, color: "#89421e" },
  Dylan: { width: 33, color: "#6c616e" },
  E: { width: 8, color: "#ccce35" },
  ECL: { width: 25, color: "#8a1267" },
  ECLiPSe: { width: 50, color: "#001d9d" },
  EJS: { width: 23, color: "#a91e50" },
  EQ: { width: 18, color: "#a78649" },
  Earthly: { width: 41, color: "#2af0ff" },
  Easybuild: { width: 57, color: "#069406" },
  "Ecere Projects": { width: 84, color: "#913960" },
  Ecmarkup: { width: 59, color: "#eb8131" },
  Edge: { width: 30, color: "#0dffe0" },
  EdgeQL: { width: 47, color: "#31a7ff" },
  EditorConfig: { width: 73, color: "#fff1f2" },
  Eiffel: { width: 29, color: "#4d6977" },
  Elixir: { width: 31, color: "#6e4a7e" },
  Elm: { width: 22, color: "#60b5cc" },
  Elvish: { width: 35, color: "#55bb55" },
  "Elvish Transcript": { width: 98, color: "#55bb55" },
  "Emacs Lisp": { width: 67, color: "#c065db" },
  EmberScript: { width: 72, color: "#fff4f3" },
  Erlang: { width: 37, color: "#b83998" },
  Euphoria: { width: 52, color: "#ff790b" },
  "F#": { width: 14, color: "#b845fc" },
  "F*": { width: 12, color: "#572e30" },
  "FIGlet Font": { width: 64, color: "#ffddbb" },
  FIRRTL: { width: 43, color: "#2f632f" },
  FLUX: { width: 32, color: "#88ccff" },
  Factor: { width: 38, color: "#636746" },
  Fancy: { width: 35, color: "#7b9db4" },
  Fantom: { width: 44, color: "#14253c" },
  Faust: { width: 33, color: "#c37240" },
  Fennel: { width: 39, color: "#fff3d7" },
  "Filebench WML": { width: 89, color: "#f6b900" },
  Fluent: { width: 37, color: "#ffcc33" },
  Forth: { width: 31, color: "#341708" },
  Fortran: { width: 42, color: "#4d41b1" },
  "Fortran Free Form": { width: 104, color: "#4d41b1" },
  FreeBASIC: { width: 63, color: "#141ac9" },
  FreeMarker: { width: 66, color: "#0050b2" },
  Frege: { width: 33, color: "#00cafe" },
  Futhark: { width: 44, color: "#5f021f" },
  "G-code": { width: 42, color: "#d08cf2" },
  GAML: { width: 36, color: "#ffc766" },
  GAMS: { width: 36, color: "#f49a22" },
  GAP: { width: 26, color: "#0000cc" },
  "GCC Machine Description": { width: 147, color: "#ffcfab" },
  GDScript: { width: 53, color: "#355570" },
  GEDCOM: { width: 54, color: "#003058" },
  GLSL: { width: 33, color: "#5686a5" },
  GSC: { width: 26, color: "#ff6800" },
  "Game Maker Language": { width: 132, color: "#71b417" },
  "Gemfile.lock": { width: 72, color: "#701516" },
  Gemini: { width: 41, color: "#ff6900" },
  "Genero 4gl": { width: 63, color: "#63408e" },
  "Genero per": { width: 65, color: "#d8df39" },
  Genie: { width: 34, color: "#fb855d" },
  Genshi: { width: 41, color: "#951531" },
  "Gentoo Ebuild": { width: 82, color: "#9400ff" },
  "Gentoo Eclass": { width: 84, color: "#9400ff" },
  "Gerber Image": { width: 78, color: "#d20b00" },
  Gherkin: { width: 45, color: "#5b2063" },
  "Git Attributes": { width: 77, color: "#f44d27" },
  "Git Config": { width: 58, color: "#f44d27" },
  "Git Revision List": { width: 96, color: "#f44d27" },
  Gleam: { width: 37, color: "#ffaff3" },
  "Glimmer JS": { width: 67, color: "#f5835f" },
  "Glimmer TS": { width: 67, color: "#3178c6" },
  Glyph: { width: 34, color: "#c1ac7f" },
  Gnuplot: { width: 47, color: "#f0a9f0" },
  Go: { width: 17, color: "#00add8" },
  "Go Checksums": { width: 88, color: "#00add8" },
  "Go Module": { width: 62, color: "#00add8" },
  "Go Workspace": { width: 84, color: "#00add8" },
  "Godot Resource": { width: 94, color: "#355570" },
  Golo: { width: 28, color: "#88562a" },
  Gosu: { width: 31, color: "#82937f" },
  Grace: { width: 34, color: "#615f8b" },
  Gradle: { width: 38, color: "#02303a" },
  "Gradle Kotlin DSL": { width: 103, color: "#02303a" },
  "Grammatical Framework": { width: 140, color: "#ff0000" },
  GraphQL: { width: 53, color: "#e10098" },
  "Graphviz (DOT)": { width: 88, color: "#2596be" },
  Groovy: { width: 42, color: "#4298b8" },
  "Groovy Server Pages": { width: 122, color: "#4298b8" },
  HAProxy: { width: 51, color: "#106da9" },
  HCL: { width: 25, color: "#844fba" },
  HLSL: { width: 32, color: "#aace60" },
  HOCON: { width: 45, color: "#9ff8ee" },
  HTML: { width: 34, color: "#e34c26" },
  "HTML+ECR": { width: 66, color: "#2e1052" },
  "HTML+EEX": { width: 65, color: "#6e4a7e" },
  "HTML+ERB": { width: 66, color: "#701516" },
  "HTML+PHP": { width: 65, color: "#4f5d95" },
  "HTML+Razor": { width: 75, color: "#512be4" },
  HTTP: { width: 31, color: "#005c9c" },
  HXML: { width: 35, color: "#f68712" },
  Hack: { width: 29, color: "#878787" },
  Haml: { width: 29, color: "#ece2a9" },
  Handlebars: { width: 66, color: "#f7931e" },
  Harbour: { width: 48, color: "#0e60e3" },
  Hare: { width: 27, color: "#9d7424" },
  Haskell: { width: 42, color: "#5e5086" },
  Haxe: { width: 29, color: "#df7900" },
  HiveQL: { width: 43, color: "#dce200" },
  HolyC: { width: 35, color: "#ffefaf" },
  "Hosts File": { width: 58, color: "#308888" },
  Hy: { width: 16, color: "#7790b2" },
  IDL: { width: 20, color: "#a3522f" },
  "IGOR Pro": { width: 55, color: "#0000cc" },
  INI: { width: 15, color: "#d1dbe0" },
  Idris: { width: 26, color: "#b30000" },
  "Ignore List": { width: 62, color: "#000000" },
  "ImageJ Macro": { width: 81, color: "#99aaff" },
  Imba: { width: 28, color: "#16cec6" },
  "Inno Setup": { width: 63, color: "#264b99" },
  Io: { width: 11, color: "#a9188d" },
  Ioke: { width: 24, color: "#078193" },
  Isabelle: { width: 44, color: "#fefe00" },
  "Isabelle ROOT": { width: 83, color: "#fefe00" },
  J: { width: 8, color: "#9eedff" },
  "JAR Manifest": { width: 78, color: "#b07219" },
  JCL: { width: 24, color: "#d90e09" },
  JFlex: { width: 32, color: "#dbca00" },
  JSON: { width: 34, color: "#292929" },
  "JSON with Comments": { width: 127, color: "#292929" },
  JSON5: { width: 41, color: "#267cb9" },
  JSONLD: { width: 50, color: "#0c479c" },
  JSONiq: { width: 44, color: "#40d47e" },
  Janet: { width: 33, color: "#0886a5" },
  Jasmin: { width: 42, color: "#d03600" },
  Java: { width: 28, color: "#b07219" },
  "Java Properties": { width: 91, color: "#2a6277" },
  "Java Server Pages": { width: 107, color: "#2a6277" },
  "Java Template Engine": { width: 126, color: "#2a6277" },
  JavaScript: { width: 63, color: "#f1e05a" },
  "JavaScript+ERB": { width: 94, color: "#f1e05a" },
  "Jest Snapshot": { width: 84, color: "#15c213" },
  "JetBrains MPS": { width: 85, color: "#21d789" },
  Jinja: { width: 29, color: "#a52a22" },
  Jison: { width: 32, color: "#56b3cb" },
  "Jison Lex": { width: 57, color: "#56b3cb" },
  Jolie: { width: 29, color: "#843179" },
  Jsonnet: { width: 48, color: "#0064bd" },
  Julia: { width: 29, color: "#a270ba" },
  "Julia REPL": { width: 64, color: "#a270ba" },
  "Jupyter Notebook": { width: 103, color: "#da5b0b" },
  Just: { width: 27, color: "#384d54" },
  KRL: { width: 25, color: "#28430a" },
  "Kaitai Struct": { width: 72, color: "#773b37" },
  KakouneScript: { width: 86, color: "#6f8042" },
  KerboScript: { width: 70, color: "#41adf0" },
  "KiCad Layout": { width: 78, color: "#2f4aab" },
  "KiCad Legacy Layout": { width: 123, color: "#2f4aab" },
  "KiCad Schematic": { width: 98, color: "#2f4aab" },
  Kotlin: { width: 34, color: "#a97bff" },
  LFE: { width: 23, color: "#4c3023" },
  LLVM: { width: 32, color: "#185619" },
  LOLCODE: { width: 59, color: "#cc9900" },
  LSL: { width: 23, color: "#3d9970" },
  LabVIEW: { width: 53, color: "#fede06" },
  Lark: { width: 26, color: "#2980b9" },
  Lasso: { width: 35, color: "#999999" },
  Latte: { width: 29, color: "#f2a542" },
  Less: { width: 28, color: "#1d365d" },
  Lex: { width: 21, color: "#dbca00" },
  LigoLANG: { width: 59, color: "#0e74ff" },
  LilyPond: { width: 51, color: "#9ccc7c" },
  Liquid: { width: 36, color: "#67b8de" },
  "Literate Agda": { width: 77, color: "#315665" },
  "Literate CoffeeScript": { width: 119, color: "#244776" },
  "Literate Haskell": { width: 89, color: "#5e5086" },
  "LiveCode Script": { width: 92, color: "#0c5ba5" },
  LiveScript: { width: 59, color: "#499886" },
  Logtalk: { width: 43, color: "#295b9a" },
  LookML: { width: 47, color: "#652b81" },
  Lua: { width: 22, color: "#000080" },
  Luau: { width: 29, color: "#00a2ff" },
  MATLAB: { width: 50, color: "#e16737" },
  MAXScript: { width: 62, color: "#00a6a6" },
  MDX: { width: 28, color: "#fcb32c" },
  MLIR: { width: 30, color: "#5ec8db" },
  MQL4: { width: 34, color: "#62a8d6" },
  MQL5: { width: 34, color: "#4a76b8" },
  MTML: { width: 35, color: "#b7e1f4" },
  Macaulay2: { width: 61, color: "#d8ffff" },
  Makefile: { width: 48, color: "#427819" },
  Mako: { width: 31, color: "#7e858d" },
  Markdown: { width: 59, color: "#083fa1" },
  Marko: { width: 36, color: "#42bff2" },
  Mask: { width: 30, color: "#f97732" },
  Mathematica: { width: 73, color: "#dd1100" },
  Max: { width: 24, color: "#c4a79c" },
  Mercury: { width: 47, color: "#ff2b2b" },
  Mermaid: { width: 49, color: "#ff3670" },
  Meson: { width: 38, color: "#007800" },
  Metal: { width: 31, color: "#8f14e9" },
  MiniYAML: { width: 58, color: "#ff1111" },
  Mint: { width: 26, color: "#02b046" },
  Mirah: { width: 32, color: "#c7a938" },
  Modelica: { width: 52, color: "#de1d31" },
  "Modula-2": { width: 53, color: "#10253f" },
  "Modula-3": { width: 53, color: "#223388" },
  Mojo: { width: 29, color: "#ff4c1f" },
  "Monkey C": { width: 57, color: "#8d6747" },
  MoonBit: { width: 49, color: "#b92381" },
  MoonScript: { width: 67, color: "#ff4585" },
  Motoko: { width: 43, color: "#fbb03b" },
  "Motorola 68K Assembly": { width: 136, color: "#005daa" },
  Move: { width: 31, color: "#4a137a" },
  Mustache: { width: 56, color: "#724b3b" },
  NCL: { width: 25, color: "#28431f" },
  NMODL: { width: 45, color: "#00356b" },
  "NPM Config": { width: 68, color: "#cb3837" },
  NWScript: { width: 55, color: "#111522" },
  Nasal: { width: 32, color: "#1d2c4e" },
  Nearley: { width: 44, color: "#990000" },
  Nemerle: { width: 48, color: "#3d3c6e" },
  NetLinx: { width: 44, color: "#0aa0ff" },
  "NetLinx+ERB": { width: 77, color: "#747faa" },
  NetLogo: { width: 49, color: "#ff6375" },
  NewLisp: { width: 50, color: "#87aed7" },
  Nextflow: { width: 51, color: "#3ac486" },
  Nginx: { width: 34, color: "#009639" },
  Nim: { width: 23, color: "#ffc200" },
  Nit: { width: 17, color: "#009917" },
  Nix: { width: 19, color: "#7e7eff" },
  Noir: { width: 25, color: "#2f1f49" },
  Nu: { width: 16, color: "#c9df40" },
  NumPy: { width: 42, color: "#9c8af9" },
  Nunjucks: { width: 54, color: "#3d8137" },
  Nushell: { width: 43, color: "#4e9906" },
  "OASv2-json": { width: 68, color: "#85ea2d" },
  "OASv2-yaml": { width: 71, color: "#85ea2d" },
  "OASv3-json": { width: 68, color: "#85ea2d" },
  "OASv3-yaml": { width: 71, color: "#85ea2d" },
  OCaml: { width: 39, color: "#ef7a08" },
  ObjectScript: { width: 72, color: "#424893" },
  "Objective-C": { width: 67, color: "#438eff" },
  "Objective-C++": { width: 81, color: "#6866fb" },
  "Objective-J": { width: 65, color: "#ff0c5a" },
  Odin: { width: 27, color: "#60affe" },
  Omgrofl: { width: 47, color: "#cabbff" },
  Opal: { width: 27, color: "#f7ede0" },
  "Open Policy Agent": { width: 107, color: "#7d9199" },
  "OpenAPI Specification v2": { width: 146, color: "#85ea2d" },
  "OpenAPI Specification v3": { width: 146, color: "#85ea2d" },
  OpenCL: { width: 47, color: "#ed2e2d" },
  "OpenEdge ABL": { width: 88, color: "#5ce600" },
  OpenQASM: { width: 67, color: "#aa70ff" },
  OpenSCAD: { width: 65, color: "#e5cd45" },
  "Option List": { width: 64, color: "#476732" },
  Org: { width: 21, color: "#77aa99" },
  Oxygene: { width: 51, color: "#cdd0e3" },
  Oz: { width: 16, color: "#fab738" },
  P4: { width: 15, color: "#7055b5" },
  PDDL: { width: 33, color: "#0d00ff" },
  "PEG.js": { width: 39, color: "#234d6b" },
  PHP: { width: 25, color: "#4f5d95" },
  PLSQL: { width: 41, color: "#dad8d8" },
  PLpgSQL: { width: 55, color: "#336790" },
  "POV-Ray SDL": { width: 79, color: "#6bac65" },
  Pact: { width: 26, color: "#f7a8b8" },
  Pan: { width: 22, color: "#cc0000" },
  Papyrus: { width: 48, color: "#6600cc" },
  Parrot: { width: 36, color: "#f3ca0a" },
  Pascal: { width: 38, color: "#e3f171" },
  Pawn: { width: 31, color: "#dbb284" },
  Pep8: { width: 29, color: "#c76f5b" },
  Perl: { width: 23, color: "#0298c3" },
  PicoLisp: { width: 51, color: "#6067af" },
  PigLatin: { width: 47, color: "#fcd7de" },
  Pike: { width: 25, color: "#005390" },
  "Pip Requirements": { width: 102, color: "#ffd343" },
  Pkl: { width: 18, color: "#6b9543" },
  PlantUML: { width: 56, color: "#fbbd16" },
  PogoScript: { width: 65, color: "#d80074" },
  Polar: { width: 31, color: "#ae81ff" },
  Portugol: { width: 49, color: "#f8bd00" },
  PostCSS: { width: 51, color: "#dc3a0c" },
  PostScript: { width: 61, color: "#da291c" },
  PowerBuilder: { width: 79, color: "#8f0f8d" },
  PowerShell: { width: 65, color: "#012456" },
  Praat: { width: 31, color: "#c8506d" },
  Prisma: { width: 40, color: "#0c344b" },
  Processing: { width: 65, color: "#0096d8" },
  Procfile: { width: 44, color: "#3b2f63" },
  Prolog: { width: 38, color: "#74283c" },
  Promela: { width: 48, color: "#de0000" },
  "Propeller Spin": { width: 81, color: "#7fa2a7" },
  Pug: { width: 23, color: "#a86454" },
  Puppet: { width: 42, color: "#302b6d" },
  PureBasic: { width: 59, color: "#5a6986" },
  PureScript: { width: 62, color: "#1d222d" },
  Pyret: { width: 31, color: "#ee1e10" },
  Python: { width: 41, color: "#3572a5" },
  "Python console": { width: 90, color: "#3572a5" },
  "Python traceback": { width: 100, color: "#3572a5" },
  "Q#": { width: 16, color: "#fed659" },
  QML: { width: 27, color: "#44a51c" },
  "Qt Script": { width: 52, color: "#00b841" },
  Quake: { width: 37, color: "#882233" },
  QuickBASIC: { width: 71, color: "#008080" },
  R: { width: 9, color: "#198ce7" },
  RAML: { width: 35, color: "#77d9fb" },
  RBS: { width: 25, color: "#701516" },
  RDoc: { width: 32, color: "#701516" },
  REXX: { width: 34, color: "#d90e09" },
  RMarkdown: { width: 68, color: "#198ce7" },
  RON: { width: 27, color: "#a62c00" },
  RPGLE: { width: 41, color: "#2bde21" },
  RUNOFF: { width: 50, color: "#665a4e" },
  Racket: { width: 40, color: "#3c5caa" },
  Ragel: { width: 33, color: "#9d5200" },
  Raku: { width: 29, color: "#0000fb" },
  Rascal: { width: 39, color: "#fffaa0" },
  ReScript: { width: 50, color: "#ed5051" },
  Reason: { width: 43, color: "#ff5847" },
  ReasonLIGO: { width: 73, color: "#ff5847" },
  Rebol: { width: 33, color: "#358a5b" },
  "Record Jar": { width: 64, color: "#0673ba" },
  Red: { width: 23, color: "#f50000" },
  "Regular Expression": { width: 113, color: "#009a00" },
  "Ren'Py": { width: 41, color: "#ff7f7f" },
  Rez: { width: 22, color: "#ffdab3" },
  Ring: { width: 27, color: "#2d54cb" },
  Riot: { width: 24, color: "#a71e49" },
  RobotFramework: { width: 99, color: "#00c0b5" },
  Roc: { width: 23, color: "#7c38f5" },
  Roff: { width: 25, color: "#ecdebe" },
  "Roff Manpage": { width: 80, color: "#ecdebe" },
  Rouge: { width: 38, color: "#cc0088" },
  "RouterOS Script": { width: 94, color: "#de3941" },
  Ruby: { width: 30, color: "#701516" },
  Rust: { width: 28, color: "#dea584" },
  SAS: { width: 25, color: "#b34936" },
  SCSS: { width: 33, color: "#c6538c" },
  SPARQL: { width: 50, color: "#0c4597" },
  SQF: { width: 25, color: "#3f3f3f" },
  SQL: { width: 25, color: "#e38c00" },
  SQLPL: { width: 41, color: "#e38c00" },
  "SRecode Template": { width: 107, color: "#348a34" },
  STL: { width: 23, color: "#373b5e" },
  SVG: { width: 25, color: "#ff9900" },
  SaltStack: { width: 54, color: "#646464" },
  Sass: { width: 28, color: "#a53b70" },
  Scala: { width: 32, color: "#c22d40" },
  Scaml: { width: 35, color: "#bd181a" },
  Scenic: { width: 39, color: "#fdc700" },
  Scheme: { width: 46, color: "#1e4aec" },
  Scilab: { width: 36, color: "#ca0f21" },
  Self: { width: 23, color: "#0579aa" },
  ShaderLab: { width: 63, color: "#222c37" },
  Shell: { width: 29, color: "#89e051" },
  "ShellCheck Config": { width: 106, color: "#cecfcb" },
  Shen: { width: 29, color: "#120f14" },
  "Simple File Verification": { width: 131, color: "#c9bfed" },
  Singularity: { width: 62, color: "#64e6ad" },
  Slash: { width: 32, color: "#007eff" },
  Slice: { width: 28, color: "#003fa2" },
  Slim: { width: 26, color: "#2b2b2b" },
  Slint: { width: 27, color: "#2379f4" },
  SmPL: { width: 35, color: "#c94949" },
  Smalltalk: { width: 53, color: "#596706" },
  Smarty: { width: 41, color: "#f0c040" },
  Smithy: { width: 40, color: "#c44536" },
  Snakemake: { width: 66, color: "#419179" },
  Solidity: { width: 44, color: "#aa6746" },
  SourcePawn: { width: 72, color: "#f69e1d" },
  Squirrel: { width: 45, color: "#800000" },
  Stan: { width: 26, color: "#b2011d" },
  "Standard ML": { width: 73, color: "#dc566d" },
  Starlark: { width: 45, color: "#76d275" },
  Stata: { width: 30, color: "#1a5f91" },
  StringTemplate: { width: 87, color: "#3fb34f" },
  Stylus: { width: 36, color: "#ff6347" },
  "SubRip Text": { width: 70, color: "#9e0101" },
  SugarSS: { width: 50, color: "#2fcc9f" },
  SuperCollider: { width: 80, color: "#46390b" },
  Svelte: { width: 36, color: "#ff3e00" },
  Sway: { width: 31, color: "#00f58c" },
  Sweave: { width: 44, color: "#198ce7" },
  Swift: { width: 30, color: "#f05138" },
  SystemVerilog: { width: 83, color: "#dae1c2" },
  "TI Program": { width: 65, color: "#a0aa87" },
  "TL-Verilog": { width: 60, color: "#c40023" },
  TLA: { width: 25, color: "#4b0079" },
  TOML: { width: 35, color: "#9c4221" },
  TSQL: { width: 34, color: "#e38c00" },
  TSV: { width: 25, color: "#237346" },
  TSX: { width: 25, color: "#3178c6" },
  TXL: { width: 24, color: "#0178b8" },
  Tact: { width: 26, color: "#48b5ff" },
  Talon: { width: 32, color: "#333333" },
  Tcl: { width: 17, color: "#e4cc98" },
  TeX: { width: 23, color: "#3d6117" },
  Terra: { width: 30, color: "#00004c" },
  "Terraform Template": { width: 112, color: "#7b42bb" },
  TextGrid: { width: 49, color: "#c8506d" },
  "TextMate Properties": { width: 115, color: "#df66e4" },
  Textile: { width: 38, color: "#ffe7ac" },
  Thrift: { width: 33, color: "#d12127" },
  Toit: { width: 23, color: "#c2c9fb" },
  Turing: { width: 37, color: "#cf142b" },
  Twig: { width: 27, color: "#c1d026" },
  TypeScript: { width: 63, color: "#3178c6" },
  TypeSpec: { width: 57, color: "#4a3665" },
  Typst: { width: 33, color: "#239dad" },
  "Unified Parallel C": { width: 99, color: "#4e3617" },
  "Unity3D Asset": { width: 82, color: "#222c37" },
  Uno: { width: 24, color: "#9933cc" },
  UnrealScript: { width: 72, color: "#a54c4d" },
  UrWeb: { width: 39, color: "#ccccee" },
  V: { width: 10, color: "#4f87c4" },
  VBA: { width: 27, color: "#867db1" },
  VBScript: { width: 53, color: "#15dcdc" },
  VCL: { width: 26, color: "#148aa8" },
  VHDL: { width: 34, color: "#adb2cb" },
  Vala: { width: 25, color: "#a56de2" },
  "Valve Data Format": { width: 106, color: "#f26025" },
  "Velocity Template Language": { width: 162, color: "#507cff" },
  Verilog: { width: 41, color: "#b2b7f8" },
  "Vim Help File": { width: 76, color: "#199f4b" },
  "Vim Script": { width: 61, color: "#199f4b" },
  "Vim Snippet": { width: 71, color: "#199f4b" },
  "Visual Basic .NET": { width: 103, color: "#945db7" },
  "Visual Basic 6.0": { width: 92, color: "#2c6353" },
  Volt: { width: 24, color: "#1f1f1f" },
  Vue: { width: 23, color: "#41b883" },
  Vyper: { width: 35, color: "#2980b9" },
  WDL: { width: 29, color: "#42f1f4" },
  WGSL: { width: 38, color: "#1a5e9a" },
  "Web Ontology Language": { width: 142, color: "#5b70bd" },
  WebAssembly: { width: 83, color: "#04133b" },
  "WebAssembly Interface Type": { width: 167, color: "#6250e7" },
  Whiley: { width: 40, color: "#d5c397" },
  Wikitext: { width: 48, color: "#fc5757" },
  "Windows Registry Entries": { width: 149, color: "#52d5ff" },
  "Witcher Script": { width: 83, color: "#ff0000" },
  Wollok: { width: 40, color: "#a23738" },
  "World of Warcraft Addon Data": { width: 172, color: "#f7e43f" },
  Wren: { width: 31, color: "#383838" },
  X10: { width: 23, color: "#4b6bef" },
  XC: { width: 18, color: "#99da07" },
  XML: { width: 27, color: "#0060ac" },
  "XML Property List": { width: 104, color: "#0060ac" },
  XQuery: { width: 44, color: "#5232e7" },
  XSLT: { width: 31, color: "#eb8ceb" },
  Xojo: { width: 28, color: "#81bd41" },
  Xonsh: { width: 38, color: "#285eef" },
  Xtend: { width: 34, color: "#24255d" },
  YAML: { width: 35, color: "#cb171e" },
  YARA: { width: 34, color: "#220000" },
  YASnippet: { width: 62, color: "#32ab90" },
  Yacc: { width: 29, color: "#4b6c4b" },
  Yul: { width: 19, color: "#794932" },
  ZAP: { width: 25, color: "#0d665e" },
  ZIL: { width: 20, color: "#dc75e5" },
  ZenScript: { width: 57, color: "#00bcd1" },
  Zephir: { width: 39, color: "#118f9e" },
  Zig: { width: 19, color: "#ec915c" },
  Zimpl: { width: 33, color: "#d67711" },
  crontab: { width: 45, color: "#ead7ac" },
  eC: { width: 16, color: "#913960" },
  fish: { width: 22, color: "#4aae47" },
  hoon: { width: 29, color: "#00b171" },
  iCalendar: { width: 56, color: "#ec564c" },
  jq: { width: 12, color: "#c7254e" },
  kvlang: { width: 38, color: "#1da6e0" },
  "mIRC Script": { width: 70, color: "#3d57c3" },
  mcfunction: { width: 65, color: "#e22837" },
  mupad: { width: 39, color: "#244963" },
  nanorc: { width: 40, color: "#2d004d" },
  nesC: { width: 30, color: "#94b0c7" },
  "omnetpp-msg": { width: 79, color: "#a0e0a0" },
  "omnetpp-ned": { width: 76, color: "#08607c" },
  ooc: { width: 22, color: "#b0b77e" },
  q: { width: 7, color: "#0040cd" },
  reStructuredText: { width: 97, color: "#141414" },
  sed: { width: 21, color: "#64b970" },
  templ: { width: 33, color: "#66d0dd" },
  vCard: { width: 35, color: "#ee2647" },
  wisp: { width: 28, color: "#7582d1" },
  xBase: { width: 37, color: "#403a40" },
};

const longestLanguage = { name: "Cloud Firestore Security Rules", width: 176, color: "#ffa000" };

export { languages, longestLanguage };
