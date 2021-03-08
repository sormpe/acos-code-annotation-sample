var htmlencode = require("htmlencode").htmlEncode;

var CodeAnnotation = function () {};

CodeAnnotation.addToHead = function (params) {
  return '<script src="/static/code-annotation-sample/content.js" type="text/javascript"></script>\n';
};

CodeAnnotation.addToBody = function (params) {
  return (
    '<div id="annotated-content" uid="' +
    params.u +
    '" data-id="' +
    htmlencode(params.name) +
    '"></div>' +
    '<div id="annotations"></div>'
  );
};

CodeAnnotation.initialize = function (req, params, handlers, cb) {
  // Initialize the content package

  params.headContent += CodeAnnotation.addToHead(params);
  params.bodyContent += CodeAnnotation.addToBody(params);

  cb();
};

CodeAnnotation.register = function (handlers) {
  handlers.contentPackages["code-annotation-sample"] = CodeAnnotation;
  handlers.contentTypes.codeannotation.installedContentPackages.push(
    CodeAnnotation
  );
};

CodeAnnotation.namespace = "code-annotation-sample";
CodeAnnotation.contentTypeNamespace = "codeannotation";
CodeAnnotation.packageType = "content";

CodeAnnotation.meta = {
  name: "code-annotation-sample",
  shortDescription: "Example code annotations",
  description: "",
  author: "Peter Sormunen",
  license: "MIT",
  version: "0.0.1",
  url: "",
  teaserContent: ["hello_world_javascript", "hello_world_python"],
  contents: {
    hello_world_javascript: {
      description: "",
      order: 0,
      title: "hello_world_javascript",
    },
    hello_world_python: {
      description: "",
      order: 1,
      title: "hello_world_python",
    },
    hello_world_html: {
      description: "",
      order: 2,
      title: "hello_world_html",
    },
    hello_world_plain_text: {
      description: "",
      order: 3,
      title: "hello_world_plain_text",
    },
    hello_world_c: {
      description: "",
      order: 4,
      title: "hello_world_c",
    },
    hello_world_css: {
      description: "",
      order: 4,
      title: "hello_world_css",
    },
  },
};

module.exports = CodeAnnotation;
