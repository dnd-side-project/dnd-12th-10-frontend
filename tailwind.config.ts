import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#F7F7F7',
          100: '#DCDCDC',
          200: '#C4C4C4',
          300: '#B0B0B0',
          400: '#9B9B9B',
          500: '#8A8A8A',
          600: '#737373',
          700: '#5C5C5C',
          800: '#474747',
          900: '#303030',
        },
        blue: {
          50: '#F0F8FF',
          100: '#DEF0FF',
          200: '#B5DAFF',
          300: '#8CC2FF',
          400: '#63A7FF',
          500: '#3881F1',
          600: '#2562CC',
          700: '#1646A6',
          800: '#0A2D80',
          900: '#061C59',
        },
        orange: {
          50: '#FFF1E6',
          100: '#FFD1AD',
          200: '#FFB685',
          300: '#FF985C',
          400: '#FF7733',
          500: '#FF530A',
          600: '#D93A00',
          700: '#B32A00',
          800: '#8C1C00',
          900: '#661100',
        },
        green: {
          50: '#E6FFEF',
          100: '#A5FAC8',
          200: '#77EDAC',
          300: '#4CE094',
          400: '#26D480',
          500: '#04C770',
          600: '#00A15E',
          700: '#007A4B',
          800: '#005437',
          900: '#002E1F',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
