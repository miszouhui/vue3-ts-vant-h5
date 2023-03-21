import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          // 两种方式都可以
          additionalData: '@import "@/assets/scss/main.css";'
        }
      }
    },
    server: {
      proxy: {
        "/dst-apis": {
          // 将www.exaple.com印射为/proxy
          target: "https://api.dev.dstzc.com", // 接口域名
          changeOrigin: true, // 是否跨域
          rewrite: (path) => path.replace(/^\/dst-apis/, ""),
        },
      },
    },
    // 打包配置
    build: {
      outDir: 'dist',
      // 指定生成静态资源的存放路径（相对于 build.outDir）。
      assetsDir: 'assets',
      terserOptions: {
        /**
         * command 用来判断环境
         */
        compress: {
          drop_console: command !== 'serve',
          // 默认是true
          drop_debugger: command !== 'serve'
        }
      }
    },
  }
})
