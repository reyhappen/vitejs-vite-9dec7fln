import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      generateScopedName: '[name]_[local]-[hash:base64:5]',
      hashPrefix: 'prefix',
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  build: {
    // cssCodeSplit: true,
    reportCompressedSize: true,
    manifest: true,
    sourcemap: true,
    rollupOptions: {
      output: {
        // entryFileNames: 'assets/[name].[hash].js',
        // chunkFileNames: 'assets/[name].[hash].js',
        // assetFileNames: 'assets/[name].[hash][extname]',
      },
      // external: {},
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    minify: 'esbuild',
  },
});
