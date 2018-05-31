const { tabWidth } = require("./constants");

module.exports = {
    extends: ["standard", "prettier", "prettier/standard"],
    plugins: ["standard", "prettier"],
    env: {
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: "module",
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            impliedStrict: true,
            jsx: true,
        },
    },
    rules: {
        "no-return-await": 0,
        "prettier/prettier": [
            "error",
            {
                trailingComma: "all",
                tabWidth: tabWidth,
            },
        ],
    },
};
