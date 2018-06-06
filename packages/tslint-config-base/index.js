module.exports = {
    rulesDirectory: ["tslint-plugin-prettier"],
    extends: ["tslint-config-standard", "tslint-config-prettier"],
    rules: {
        prettier: true,
        "no-empty": false,
    },
};
