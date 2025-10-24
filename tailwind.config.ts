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
        brand: {
          blue: '#1F78C8',         // Logo blue
          blueDark: '#155E99',     // Darker blue for hover/active
          blueLight: '#8FC1EA',    // Light/tint
          slate: '#4F5D75',        // Heading/body
          muted: '#6B7A99',        // Secondary text
          cream: '#F7F3E9',        // Warm surface
          surface: '#E2E8F0',      // Subtle borders/surfaces
          ink: '#2D3748',          // Strong on-dark text
          warm: '#E8B4A0',         // Warm accent
        },
      },
    },
  },
  plugins: [],
}
export default config
