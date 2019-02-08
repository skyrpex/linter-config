const { resolve } = require("path");
const { spawnSync } = require("child_process");

test("should report TypeScript errors", () => {
    expect(
        spawnSync("tslint", [
            resolve(__dirname, "index.fixture.ts"),
        ]).stdout.toString(),
    ).toMatchSnapshot();
});
