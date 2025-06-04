// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://mofa-org.github.io',
  base: '/',
  outDir: '../docs',
  integrations: [
    tailwind({
      // Disable the default base styles to use our custom CSS
      applyBaseStyles: false,
    })
  ],
  build: {
    inlineStylesheets: 'always',  // 强制内联CSS
    format: 'directory'           // 确保正确的目录结构
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: undefined,     // 避免代码分割
          entryFileNames: 'assets/[name].[hash].js',
          chunkFileNames: 'assets/[name].[hash].js',
          assetFileNames: 'assets/[name].[hash].[ext]'
        }
      }
    }
  }
});
