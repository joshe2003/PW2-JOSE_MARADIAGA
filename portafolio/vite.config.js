import { defineConfig } from 'vite';
import purgecss from '@fullhuman/postcss-purgecss';

export default defineConfig(({ command }) => ({
  // Ruta relativa: funciona en GitHub Pages sin importar el nombre del repo
  base: './',
  css: {
    postcss: {
      plugins: command === 'build'
        ? [
            purgecss.default
              ? purgecss.default({
                  content: ['./index.html', './src/**/*.js'],
                  safelist: ['dark', 'hidden', 'activo'],
                })
              : purgecss({
                  content: ['./index.html', './src/**/*.js'],
                  safelist: ['dark', 'hidden', 'activo'],
                }),
          ]
        : [],
    },
  },
  build: {
    outDir: 'dist',
  },
}));
