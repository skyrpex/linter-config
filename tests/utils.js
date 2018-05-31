const path = require("path");
const { CLIEngine } = require("eslint");

module.exports.cleanReport = ({ results, ...report }) => ({
    ...report,
    results: results.map(({ filePath, ...result }) => ({
        ...result,
        filePath: path.relative(process.cwd(), filePath),
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
