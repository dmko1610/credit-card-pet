import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import App from "../src/App";

describe("App Creation", () => {
  it("renders the application", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
