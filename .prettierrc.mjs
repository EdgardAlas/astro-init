// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  trailingComma: "es5",
  semi: true,
  tabWidth: 2,
  singleQuote: true,
  jsxSingleQuote: true,
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
