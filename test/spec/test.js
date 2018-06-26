import React from "react-native";
import { render } from "enzyme";
import { expect } from "chai";

import VictoryGauge from "../../lib/components/victory-gauge";

const components = [
  { component: VictoryGauge, name: "VictoryGauge" }
];

describe("Default render", () => {
  components.forEach((c) => {
    it(`should work for ${c.name}`, () => {
      const wrapper = render(React.createElement(c.component));
      expect(wrapper).to.have.length(1);
    });
  });
});