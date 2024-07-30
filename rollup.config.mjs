import { babel } from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import cssnano from "cssnano";
import terser from "@rollup/plugin-terser";

export default {
  input: "index.jsx",
  output: {
    dir: "output",
    format: "es",
  },
  external: ["react"],
  plugins: [
    babel({
      babelHelpers: "bundled",
      presets: ["@babel/preset-react", "minify"],
    }),
    postcss({
      plugins: [cssnano()],
      minimize: true,
    }),
    terser(),
  ],
};
