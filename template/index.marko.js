// Compiled using marko@4.4.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components\\taglib\\component-globals-tag")),
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    test_template = marko_loadTemplate(require.resolve("../components/test/template.marko")),
    test_tag = marko_loadTag(test_template),
    init_components_tag = marko_loadTag(require("marko/src/components\\taglib\\init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs\\async\\await-reorderer-tag"));

function render(input, out) {
  var data = input;

  out.w("<html lang=\"id-ID\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><meta name=\"robots\" content=\"noindex\"><link href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Roboto+Mono:400|Material+Icons\" as=\"style\" rel=\"preload\"><link rel=\"manifest\" href=\"/static/js/manifest.json\"><link rel=\"apple-touch-icon-precomposed\" href=\"/static/img/apple-icon-precomposed.png\"><link rel=\"icon\" href=\"/static/img/favicon.ico\"><meta name=\"apple-mobile-web-app-capable\" content=\"yes\"><title>Sibela web</title><link href=\"/static/css/index.css\" as=\"style\" rel=\"preload\"><script src=\"/static/js/preloadcss.js\"></script><script src=\"/static/js/index.js\" async defer></script></head></html><body class=\"container\">");

  component_globals_tag({}, out);

  test_tag({}, out);

  init_components_tag({}, out);

  await_reorderer_tag({}, out);

  out.w("</body>");
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "marko/src/components\\taglib\\component-globals-tag",
      "../components/test/template.marko",
      "marko/src/components\\taglib\\init-components-tag",
      "marko/src/taglibs\\async\\await-reorderer-tag"
    ]
  };
