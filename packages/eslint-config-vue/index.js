const { tabWidth } = require("@skyrpex/eslint-config-base/constants");

module.exports = {
    extends: ["@skyrpex/base", "plugin:vue/recommended"],
    plugins: ["vue"],
    parserOptions: {
        parser: "babel-eslint",
    },
    rules: {
        "vue/html-closing-bracket-newline": [
            "error",
            {
                multiline: "always",
            },
        ],
        "vue/html-indent": [
            "error",
            tabWidth,
            {
                closeBracket: 0,
            },
        ],
        "vue/html-closing-bracket-spacing": "error",
    },
};
