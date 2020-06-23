import React from "react";
import renderer from "react-test-renderer";

import TopRow from "../../src/components/TopRow";

describe("Top Row Creation", () => {
  it("Render component", () => {
    const tree = renderer.create(<TopRow />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
