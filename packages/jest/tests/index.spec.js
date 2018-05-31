const { createEngine, cleanReport } = require("../../../tests/utils");

const engine = createEngine({
    configFile: require.resolve("../index.js"),
});

test("should report Jest errors", () => {
    const report = engine.executeOnFiles(["jest.fixture.js"]);

    expect(cleanReport(report)).toMatchSnapshot();
});
