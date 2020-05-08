import React from "react";
import { shallow } from "enzyme";

import Policy from "@components/footer/Policy";

it("has a list of policies", () => {
  const wrapper = shallow(<Policy />);
  expect(wrapper.find("ul").length).toBe(1);
});
