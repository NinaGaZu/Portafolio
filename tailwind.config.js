/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: { 'ssm':'375px', 'sm': '640px', 'md': '768px', 'lg': '1024px' },
    extend: {
      colors: {
        primary: { 900: '#0f172a', 800: '#1e293b', 700: '#334155' },
        accent: { 400: '#a78bfa', 500: '#8b5cf6', 600: '#7c3aed' },
        secondary: { 400: '#22d3ee', 500: '#06b6d4' },
        neutral: { 50: '#f9fafb', 100: '#f3f4f6', 200: '#e5e7eb', 
                   400: '#9ca3af', 600: '#4b5563', 700: '#374151', 900: '#111827' }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}