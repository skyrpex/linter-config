const { createEngine, cleanReport } = require("../../../tests/utils");

const engine = createEngine({
    configFile: require.resolve("../index.js"),
});

test("should validate SFC without errors", () => {
    const report = engine.executeOnFiles(["component.fixture.vue"]);

    expect(cleanReport(report)).toMatchSnapshot();
});

test("should validate JSX without errors", () => {
    const report = engine.executeOnFiles(["component.fixture.jsx"]);

    expect(cleanReport(report)).toMatchSnapshot();
});
