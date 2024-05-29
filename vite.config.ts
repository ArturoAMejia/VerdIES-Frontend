import MillionLint from '@million/lint';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from "path"

// https://vitejs.dev/config/
const plugins = [react()];
plugins.unshift(MillionLint.vite())

export default defineConfig({
  plugins: plugins,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});