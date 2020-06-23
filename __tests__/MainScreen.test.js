import React from "react";
import renderer from "react-test-renderer";
import MainScreen from "../src/screens/MainScreen";

describe("Card Creation", () => {
  it("Render component", () => {
    const tree = renderer.create(<MainScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});