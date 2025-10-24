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
        // 3S Official Brand Colors from Graphic Standard Manual
        brand: {
          primary: '#107BC7',      // Primary Blue - Main brand color
          light: '#6CBBF3',        // Light Blue - Secondary accent
          lighter: '#E8F5FF',      // Very Light Blue - Background/subtle
          dark: '#282828',         // Dark Gray/Black - Text and contrast
          white: '#FFFFFF',        // White - Clean backgrounds
        },
      },
      fontFamily: {
        headline: ['Montserrat', 'sans-serif'],     // For headlines (per brand manual)
        body: ['Figtree', 'sans-serif'],     // For body text (per brand manual)
      },
    },
  },
  plugins: [],
}
export default config
