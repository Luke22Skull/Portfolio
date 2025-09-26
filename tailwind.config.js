/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./*.html"
  ],
  theme: {
    extend: {
      // colors: {
      //   primary: {
      //     DEFAULT: 'rgb(28, 28, 66)',
      //     solid: 'rgb(26, 26, 64)'
      //   },
      //   text: {
      //     light: 'rgb(250, 250, 250)',
      //     dark: 'rgb(51, 51, 51)'
      //   },
      //   accent: {
      //     purple: 'rgb(138, 43, 226)'
      //   }
      // },
      spacing: {
        'xs': 'clamp(0.88rem, 0.85rem + 0.11vw, 0.94rem)',
        's': 'clamp(1.13rem, 1.08rem + 0.22vw, 1.25rem)',
        'm': 'clamp(1.69rem, 1.62rem + 0.33vw, 1.88rem)',
        'l': 'clamp(2.25rem, 2.16rem + 0.43vw, 2.50rem)',
        'xl': 'clamp(3.38rem, 3.24rem + 0.65vw, 3.75rem)',
        '2xl': 'clamp(4.50rem, 4.33rem + 0.87vw, 5.00rem)',
        '3xl': 'clamp(6.75rem, 6.49rem + 1.30vw, 7.50rem)'
      },
      fontSize: {
        'step--2': 'clamp(0.78rem, 0.77rem + 0.03vw, 0.8rem)',
        'step--1': 'clamp(0.94rem, 0.92rem + 0.11vw, 1rem)',
        'step-0': 'clamp(1.13rem, 1.08rem + 0.22vw, 1.25rem)',
        'step-1': 'clamp(1.35rem, 1.28rem + 0.37vw, 1.56rem)',
        'step-2': 'clamp(1.62rem, 1.50rem + 0.58vw, 1.95rem)',
        'step-3': 'clamp(1.94rem, 1.77rem + 0.87vw, 2.44rem)',
        'step-4': 'clamp(2.33rem, 2.08rem + 1.25vw, 3.05rem)',
        'step-5': 'clamp(2.80rem, 2.45rem + 1.77vw, 3.82rem)'
      }
    },
  },
  plugins: [],
}