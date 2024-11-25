const { defineConfig } = require("cypress");

console.log(defineConfig)
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(_on, config) {
      // implement node event listeners here
    },
  },
});
