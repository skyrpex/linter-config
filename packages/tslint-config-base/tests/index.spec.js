const { resolve } = require("path");
const { spawnNpmSync } = require("../../../tests/utils");

test("should report TypeScript errors", () => {
    expect(
        spawnNpmSync("tslint", [
            resolve(__dirname, "index.fixture.ts"),
        ]).stdout.toString(),
    ).toMatchSnapshot();
});
