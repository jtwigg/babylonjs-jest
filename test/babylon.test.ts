import * as BABYLON from "@babylonjs/core";

describe("Babylong tests3", () => {
  test("Should work please", () => {
    const scalar = new BABYLON.Scalar();
    expect(scalar).not.toBeUndefined();
    console.log(scalar);
  });
});
