import * as BABYLON from "@babylonjs/core";

describe("Babylong tests2", () => {
  test("Should work please", () => {
    const engine = new BABYLON.Engine(undefined!);
    expect(engine).not.toBeUndefined();
    console.log(engine);
  });
});
