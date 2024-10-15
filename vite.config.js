import { resolve } from 'path';
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about/index.html'),
        units: resolve(__dirname, 'units/index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
      },
    },
  },

  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'lib/partials'),
    }),
  ],
});
