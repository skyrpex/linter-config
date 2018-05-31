module.exports = {
    extends: ["@skyrpex/base"],
    plugins: ["flowtype-errors"],
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "babel-eslint",
    },
    globals: {
        TimeoutID: true,
        $Values: true,
        $Shape: true,
        $ReadOnlyArray: true,
        $ReadOnly: true,
        $Keys: true,
        $Exact: true,
    },
    rules: {
        "flowtype-errors/show-errors": 2,
    },
};
