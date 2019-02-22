module.exports = {
    extends: [
        "stylelint-config-standard",
        "stylelint-config-recess-order",
        "stylelint-config-prettier",
    ],
    plugins: ["stylelint-scss"],
    rules: {
        "selector-max-universal": 1,
        "selector-max-type": [
            0,
            { ignore: ["child", "descendant", "compounded"] },
        ],
        "scss/dollar-variable-colon-space-after": "always",
        "scss/dollar-variable-colon-space-before": "never",
        "scss/dollar-variable-no-missing-interpolation": true,
        "scss/dollar-variable-pattern": /^[a-z-]+$/,
        "scss/double-slash-comment-whitespace-inside": "always",
        "scss/operator-no-newline-before": true,
        "scss/operator-no-unspaced": true,
        "scss/selector-no-redundant-nesting-selector": true,
        "at-rule-no-unknown": null,
        "scss/at-rule-no-unknown": true,
    },
};
