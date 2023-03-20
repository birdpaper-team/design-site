const path = require("path");
const vuePlugin = require("@vitejs/plugin-vue");
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

/**
 * @type {import('vite').UserConfig}
 */
module.exports = {
  plugins: [
    VueSetupExtend(),
    vuePlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    minify: false,
  },
};
