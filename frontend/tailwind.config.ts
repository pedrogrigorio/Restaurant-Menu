import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},

    colors: {
      gray: {
        50: '#eaeaea',
        100: '#bdbdbf',
        200: '#9d9da0',
        300: '#707074',
        400: '#555559',
        500: '#2a2a30',
        600: '#26262c',
        700: '#1e1e22',
        800: '#17171a',
        900: '#121214',
      },
    },
  },
  plugins: [],
}
export default config
