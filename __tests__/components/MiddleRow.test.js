import React from "react";
import renderer from "react-test-renderer";

import MiddleRow from "../../src/components/MiddleRow";

describe("Middle Row Creation", () => {
  it("Render component", () => {
    const tree = renderer.create(<MiddleRow />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
