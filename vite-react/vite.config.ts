import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [
    react({
      tsDecorators: true,
    })
  ],
  esbuild: {
    tsconfigRaw: path.resolve('tsconfig.json'),
  },
  build: {
    minify: false,
    terserOptions: {
      compress: false,
      mangle: false,
      module: true,
    }
  }
})