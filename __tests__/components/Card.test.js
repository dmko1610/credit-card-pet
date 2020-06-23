import React from "react";
import renderer from "react-test-renderer";
import Card from "../../src/components/Card";

describe("Card Creation", () => {
  it("Render component", () => {
    const tree = renderer.create(<Card />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
