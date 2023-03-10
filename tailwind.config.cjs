/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    logs: false,
  }
}
