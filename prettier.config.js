/** @type {import('prettier').Config} */
module.exports = {
  singleQuote: true,
  semi: false,
  plugins: [require('prettier-plugin-tailwindcss')],
  tabWidth: 2,
  printWidth: 100,
}
