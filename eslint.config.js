const js = require("@eslint/js");
      const ts = require("eslint-plugin-ts");

      module.exports = [
        js.configs.recommended,
        ts.configs.recommended,
      ];