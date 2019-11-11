import pkg from "./package.json";
import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import htmlTemplate from "rollup-plugin-generate-html-template";
import postcss from "rollup-plugin-postcss";

const prod = process.env.NODE_ENV === "production";

const config = [
  {
    input: "src/index.js",
    output: [
      {
        name: "ReactUseFocusExit",
        file: pkg.browser,
        format: "umd",
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      },
      {
        file: pkg.module,
        format: "es"
      }
    ],
    external: ["react", "react-dom"],
    plugins: [
      resolve(),
      babel({
        exclude: "node_modules/**"
      }),
      external(),
      prod && terser()
    ]
  }
];

if (!prod) {
  // Demo site build config
  config.push({
    input: "demo/src/index.js",
    output: {
      file: "demo/index.js",
      format: "umd",
      globals: {
        react: "React",
        "react-dom": "ReactDOM"
      }
    },
    external: ["react", "react-dom"],
    plugins: [
      resolve({
        customResolveOptions: {
          moduleDirectory: "dist"
        }
      }),
      babel({
        exclude: "node_modules/**"
      }),
      external(),
      htmlTemplate({
        template: "demo/src/index.html",
        target: "demo/index.html"
      }),
      postcss({
        modules: true
      }),
      serve("demo"),
      livereload(["src", "demo"])
    ]
  });
}

export default config;
