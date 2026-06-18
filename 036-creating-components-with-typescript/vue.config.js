const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: "src/main.ts",
      title: "Intro to Vue 3 + TypeScript: Creating Components with TypeScript",
    },
  },
});
