import { heroui } from '@heroui/react'
import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
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
        50: '#FFEAE5',
        100: '#FFDBD3',
        200: '#FFBFB0',
        300: '#FFA28D',
        400: '#FF856A',
        500: '#FF7050',
        600: '#E66548',
        700: '#CC5A40',
        800: '#CC5A40',
        900: '#994330',
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
    extend: {
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '40px',

        display01: [
          '40px',
          {
            fontWeight: '700',
            lineHeight: '140%',
            letterSpacing: '-0.01em',
          },
        ],
        title01: [
          '24px',
          {
            fontWeight: '700',
            lineHeight: '140%',
            letterSpacing: '-0.01em',
          },
        ],
        title02: [
          '20px',
          {
            fontWeight: '600',
            lineHeight: '140%',
            letterSpacing: '-0.01em',
          },
        ],
        title03: [
          '16px',
          {
            fontWeight: '600',
            lineHeight: '140%',
            letterSpacing: '-0.01em',
          },
        ],
        body01: [
          '18px',
          {
            fontWeight: '500',
            lineHeight: '150%',
            letterSpacing: '-0.01em',
          },
        ],
        body02: [
          '16px',
          {
            fontWeight: '500',
            lineHeight: '150%',
            letterSpacing: '-0.01em',
          },
        ],
        body03: [
          '14px',
          {
            fontWeight: '500',
            lineHeight: '150%',
            letterSpacing: '-0.01em',
          },
        ],
        caption01: [
          '12px',
          {
            fontWeight: '500',
            lineHeight: '150%',
            letterSpacing: '-0.01em',
          },
        ],
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      lineHeight: {
        100: '100%',
        110: '110%',
        120: '120%',
        130: '130%',
        140: '140%',
        150: '150%',
        160: '160%',
        170: '170%',
        180: '180%',
        190: '190%',
        200: '200%',
      },
      borderRadius: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '40px',
      },
    },
    boxShadow: {
      card: '0px 4px 0px 0px #000000',
      gray: '0px 2px 8px 0px #00000014',
      black: '0px 2px 0px 0px #000000',
    },
  },
  darkMode: 'class',
  plugins: [heroui()],
} satisfies Config
