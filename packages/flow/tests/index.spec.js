const { createEngine, cleanReport } = require("../../../tests/utils");

const engine = createEngine({
    configFile: require.resolve("../index.js"),
});

test("should report incompatible type error", () => {
    const report = engine.executeOnFiles(["incompatible-type.fixture.js"]);
    expect(cleanReport(report)).toMatchSnapshot();
});
