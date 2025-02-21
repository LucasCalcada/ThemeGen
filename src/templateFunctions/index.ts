export const templateFunctions = {};

function loadTemplateFunction(name: string, templateFunction: Function) {
  templateFunctions[name] = function () {
    return templateFunction;
  };
}

import hexToHypr from "./hyprColors.ts";
loadTemplateFunction("hexToHypr", hexToHypr);
