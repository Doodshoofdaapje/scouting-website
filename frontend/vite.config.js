import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import markdown from 'vite-plugin-string';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    markdown(),
  ],
  base: "/scouting-website/#",
  assetsInclude: ['**/*.md'],
})
