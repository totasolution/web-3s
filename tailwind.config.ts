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
        company: {
          primary: '#4F5D75',      // Softer slate blue
          secondary: '#6B7A99',    // Muted blue-gray
          accent: '#8FA8C9',       // Light blue
          warm: '#E8B4A0',         // Soft coral
          cream: '#F7F3E9',        // Warm cream
          dark: '#2D3748',         // Deep charcoal
          light: '#E2E8F0',        // Light gray-blue
        },
      },
    },
  },
  plugins: [],
}
export default config
