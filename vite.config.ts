import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    watch: {
      usePolling: true
    }
  },
  resolve: {
    alias: {
      'src': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'build',
  },
  publicDir: 'public'
});
