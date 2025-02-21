export const templateFunctions = {};

function loadTemplateFunction(name: string, templateFunction: Function) {
  templateFunctions[name] = function () {
    return templateFunction;
  };
}

import hexToRgba from "./mustacheFuncs";
loadTemplateFunction("hexToRgba", hexToRgba);
