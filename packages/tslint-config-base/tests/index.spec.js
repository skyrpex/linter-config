const { resolve } = require("path");
const { spawnSync } = require("child_process");

test("xxx", () => {
    expect(
        spawnSync("tslint", [
            resolve(__dirname, "index.fixture.ts"),
        ]).stdout.toString(),
    ).toMatchSnapshot();
});
