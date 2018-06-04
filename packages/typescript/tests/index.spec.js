const { createEngine, cleanReport } = require("../../../tests/utils");

const engine = createEngine({
    configFile: require.resolve("../index.js"),
});

test("should report missing trailing slash", () => {
    const report = engine.executeOnFiles(["typescript.fixture.ts"]);
    expect(cleanReport(report)).toMatchSnapshot();
});
