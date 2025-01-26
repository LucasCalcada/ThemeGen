import { parse } from "yaml";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs"
import path from "path";
import mustache from "mustache";

interface TemplateFile {
  template: string,
  outputPath: string
}

const CONFIG_PATH = "./config.yaml";
const THEME_PATH = "./colorscheme.yaml";

const CONFIG = parse(readFileSync(CONFIG_PATH, "utf8"));
const THEME = parse(readFileSync(THEME_PATH, "utf8"));

const GENERATED_PATH = CONFIG.generatedPath ?? "./generated/";

const templates: TemplateFile[] = CONFIG.generatedFiles;

templates.map((template: TemplateFile) => {
  let templatePath = path.resolve(__dirname, `./templates/${template.template}.mustache`);
  let templateFile = readFileSync(templatePath, "utf-8");
  let compiledFile = mustache.render(templateFile, THEME);
  let outputPath = path.join(GENERATED_PATH, template.outputPath);
  let dirPath = path.dirname(outputPath);
  if (!existsSync(dirPath)) mkdirSync(dirPath, { recursive: true });
  writeFileSync(outputPath, compiledFile);
});
