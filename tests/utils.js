const path = require("path");
const { CLIEngine } = require("eslint");
const { spawnSync } = require("child_process");
const which = require("npm-which")(process.cwd());

module.exports.spawnNpmSync = (bin, args = []) => {
    return spawnSync(which.sync(bin), args);
};

module.exports.cleanReport = ({ results, ...report }) => ({
    ...report,
    results: results.map(({ filePath, ...result }) => ({
        ...result,
        filePath: path.relative(process.cwd(), filePath).replace(/\\/g, "/"),
    })),
});

module.exports.createEngine = ({ configFile }) => {
    return new CLIEngine({
        configFile,
        cwd: path.resolve(__dirname, "fixtures"),
        useEslintrc: false,
        ignore: false,
    });
};
