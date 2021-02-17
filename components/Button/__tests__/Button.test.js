import React from "react";
import { shallow } from "enzyme";
import Button from "../Button";

describe("<Button />", () => {
  const props = {
    test: "TEST",
  };

  it("renders", () => {
    const wrapper = shallow(<Button {...props} />);
    expect(wrapper.exists());
  });
});
