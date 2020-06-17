import "react-native";
import React from "react";
import { render } from "react-native-testing-library";
import renderer from "react-test-renderer";
import App from "../src/App";

describe("Credit Card App", () => {
  it("renders the application", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
