import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'Hangman-Game', // Important for GitHub Pages
  build: {
    outDir: 'dist', // Ensure this matches your deploy script
  }
})
