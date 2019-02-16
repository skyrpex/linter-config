const prettier = require("./prettier");

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
        "prettier/prettier": ["error", prettier],
        // The rule no-negated-in-lhs is deprecated, so
        // we enable no-unsafe-negation instead.
        "no-negated-in-lhs": 0,
        "no-unsafe-negation": "error",
    },
};
