import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/chef-claude/',     
  plugins: [
    react(),
    tailwindcss({
      config: {
        content: [
          './src/**/*.{js,jsx,ts,tsx}',
          './public/index.html',
        ],
        theme: {
          extend: {},
        },
        plugins: [],
      },
    })
  ],
})
