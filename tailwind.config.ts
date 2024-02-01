import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primaryDarkColor': '#17163A',
        'primaryDarkColorLighter': '#1C2D4E',
        'textColor': '#EFF598',
        'blackColor': '#111111',
        'whiteColor': '#FFFAFA',
        'borderColor': '#76D3FC',
        'activeColor': 'rgba(39,249,150,0.2)',
        'activeBorderColor': 'rgba(39,249,150)',
        'primaryDarkColorLighterTrans' : 'rgba(28,45,78,0.3)',
        'btnBorder' : '#566a94'
      },
    },
  },
  plugins: [],
}
export default config
