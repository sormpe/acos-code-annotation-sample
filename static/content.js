window.codeAnnotation = {
  hello_world_python: [
    {
      language: "python",
    },
    {
      content:
        "def hello_world():\n    print(“Hello world!”)\n    \nhello_world()",
      annotatedContent:
        "1«def hello_world():\n    print(“Hello world!”)»1\n    \n2«hello_world()»2",
    },
    {
      annotations: [
        {
          index: 1,
          content: ["def hello_world():\n    print(“Hello world!”)"],
          annotation: "Function itself",
          locIndices: [0],
        },
        {
          index: 2,
          content: ["hello_world()"],
          annotation: "Here we call the function",
          locIndices: [50],
        },
      ],
    },
  ],
  hello_world_html: [
    {
      language: "html",
    },
    {
      content:
        "<!DOCTYPE html>\n<html>\n    <head>\n        <title>Example</title>\n    </head>\n    <body>\n        <p>Hello, World!</p>\n    </body>\n</html>\n",
      annotatedContent:
        "1«<!DOCTYPE html>\n<html>\n    <head>\n        <title>Example</title>\n    </head>\n2«    <body>\n        3«<p>Hello, World!</p>»3\n    </body>»2\n</html>\n»1",
    },
    {
      annotations: [
        {
          index: 1,
          content: [
            "<!DOCTYPE html>\n<html>\n    <head>\n        <title>Example</title>\n    </head>\n    <body>\n        <p>Hello, World!</p>\n    </body>\n</html>\n",
          ],
          annotation: "Document",
          locIndices: [0],
        },
        {
          index: 2,
          content: ["    <body>\n        <p>Hello, World!</p>\n    </body>"],
          annotation: "Body",
          locIndices: [77],
        },
        {
          index: 3,
          content: ["<p>Hello, World!</p>"],
          annotation: "Paragraph",
          locIndices: [96],
        },
      ],
    },
  ],
  hello_world_javascript: [
    {
      language: "javascript",
    },
    {
      content:
        "function hello(name){\n   console.log(\"Hello \" + name);\n}\n\nhello('node.js');",
      annotatedContent:
        "1«function hello(name){\n   console.log(\"Hello \" + name);\n}\n»1\n2«hello('node.js');»2",
    },
    {
      annotations: [
        {
          index: 1,
          content: [
            'function hello(name){\n   console.log("Hello " + name);\n}\n',
          ],
          annotation: "Function",
          locIndices: [0],
        },
        {
          index: 2,
          content: ["hello('node.js');"],
          annotation: "Here we call the function",
          locIndices: [58],
        },
      ],
    },
  ],
  hello_world_javascript: [
    {
      language: "javascript",
    },
    {
      content:
        "function hello(name){\n   console.log(\"Hello \" + name);\n}\n\nhello('node.js');",
      annotatedContent:
        "1«function hello(name){\n   console.log(\"Hello \" + name);\n}\n»1\n2«hello('node.js');»2",
    },
    {
      annotations: [
        {
          index: 1,
          content: [
            'function hello(name){\n   console.log("Hello " + name);\n}\n',
          ],
          annotation: "Function declaration",
          locIndices: [0],
        },
        {
          index: 2,
          content: ["hello('node.js');"],
          annotation: "Here we call the function",
          locIndices: [58],
        },
      ],
    },
  ],
  hello_world_c: [
    {
      language: "c",
    },
    {
      content:
        '#include <stdio.h>\nint main() {\n   // printf() displays the string inside quotation\n   printf("Hello, World!");\n   return 0;\n}',
      annotatedContent:
        '1«#include <stdio.h>\n»12«int main() {\n   // printf() displays the string inside quotation\n   printf("Hello, World!");\n   3«return 0;»3\n}»2',
    },
    {
      annotations: [
        {
          index: 1,
          content: ["#include <stdio.h>\n"],
          annotation: "Include libraries",
          locIndices: [0],
        },
        {
          index: 2,
          content: [
            'int main() {\n   // printf() displays the string inside quotation\n   printf("Hello, World!");\n   return 0;\n}',
          ],
          annotation: "Function",
          locIndices: [19],
        },
        {
          index: 3,
          content: ["return 0;"],
          annotation: "Return statement",
          locIndices: [115],
        },
      ],
    },
  ],
  hello_world_c: [
    {
      language: "c",
    },
    {
      content:
        '#include <stdio.h>\nint main() {\n   // printf() displays the string inside quotation\n   printf("Hello, World!");\n   return 0;\n}',
      annotatedContent:
        '1«#include <stdio.h>\n»12«int main() {\n   // printf() displays the string inside quotation\n   printf("Hello, World!");\n   3«return 0;»3\n}»2',
    },
    {
      annotations: [
        {
          index: 1,
          content: ["#include <stdio.h>\n"],
          annotation: "Include libraries",
          locIndices: [0],
        },
        {
          index: 2,
          content: [
            'int main() {\n   // printf() displays the string inside quotation\n   printf("Hello, World!");\n   return 0;\n}',
          ],
          annotation: "Function",
          locIndices: [19],
        },
        {
          index: 3,
          content: ["return 0;"],
          annotation: "Return statement",
          locIndices: [115],
        },
      ],
    },
  ],
  hello_world_plain_text: [
    {
      language: "plain_text",
    },
    {
      content:
        "Hello, World!\n\nWith this tool course instructors can easily create annotations that highlights specific parts of a program code.",
      annotatedContent:
        "3«1«Hello, World!»1\n\n2«With this tool course instructors can easily create annotations that highlights specific parts of a program code.»2»3",
    },
    {
      annotations: [
        {
          index: 1,
          content: ["Hello, World!"],
          annotation: "Header",
          locIndices: [0],
        },
        {
          index: 2,
          content: [
            "With this tool course instructors can easily create annotations that highlights specific parts of a program code.",
          ],
          annotation: "Introduction",
          locIndices: [15],
        },
        {
          index: 3,
          content: [
            "Hello, World!\n\nWith this tool course instructors can easily create annotations that highlights specific parts of a program code.",
          ],
          annotation: "Whole text",
          locIndices: [0],
        },
      ],
    },
  ],
  hello_world_css: [
    {
      language: "css",
    },
    {
      content:
        'body {\n\tbackground-color: #2D2D2D;\n}\n\nh1 {\n\tcolor: #C26356;\n\tfont-size: 30px;\n\tfont-family: Menlo, Monaco, fixed-width;\n}\n\np {\n\tcolor: white;\n\tfont-family: "Source Code Pro", Menlo, Monaco, fixed-width;\n}',
      annotatedContent:
        '1«2«body {\n\tbackground-color: #2D2D2D;\n}\n»2\n3«h1 {\n\tcolor: #C26356;\n\tfont-size: 30px;\n\tfont-family: Menlo, Monaco, fixed-width;\n}»3\n\np {\n\tcolor: white;\n\tfont-family: "Source Code Pro", Menlo, Monaco, fixed-width;\n}»1',
    },
    {
      annotations: [
        {
          index: 1,
          content: [
            'body {\n\tbackground-color: #2D2D2D;\n}\n\nh1 {\n\tcolor: #C26356;\n\tfont-size: 30px;\n\tfont-family: Menlo, Monaco, fixed-width;\n}\n\np {\n\tcolor: white;\n\tfont-family: "Source Code Pro", Menlo, Monaco, fixed-width;\n}',
          ],
          annotation: "All rules",
          locIndices: [0],
        },
        {
          index: 2,
          content: ["body {\n\tbackground-color: #2D2D2D;\n}\n"],
          annotation: "Body",
          locIndices: [0],
        },
        {
          index: 3,
          content: [
            "h1 {\n\tcolor: #C26356;\n\tfont-size: 30px;\n\tfont-family: Menlo, Monaco, fixed-width;\n}",
          ],
          annotation: "Header",
          locIndices: [38],
        },
      ],
    },
  ],
};
