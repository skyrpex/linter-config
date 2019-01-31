const { tabWidth } = require("./constants");

module.exports = {
    extends: ["standard", "prettier", "prettier/standard"],
    plugins: ["standard", "prettier"],
    env: {
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
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
        // The rule no-unsafe-negation is deprecated, so
        // we disable it and enable no-negated-in-lhs instead.
        "no-unsafe-negation": 0,
        "no-negated-in-lhs": "error",
    },
};
