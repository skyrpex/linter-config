const { createEngine, cleanReport } = require("../../../tests/utils");

const engine = createEngine({
    configFile: require.resolve("../index.js"),
});

test("should report missing trailing slash", () => {
    const report = engine.executeOnFiles(["missing-trailing-slash.fixture.js"]);
    expect(cleanReport(report)).toMatchSnapshot();
});
