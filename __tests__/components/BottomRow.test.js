import React from "react";
import renderer from "react-test-renderer";

import BottomRow from "../../src/components/BottomRow";

describe("Bottom Row Creation", () => {
  it("Render component", () => {
    const tree = renderer.create(<BottomRow />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
