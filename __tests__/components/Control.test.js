import React from "react";
import renderer from "react-test-renderer";
import Control from "../../src/components/Control";

describe("Control Creation", () => {
  it("Render component", () => {
    const tree = renderer.create(<Control />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
