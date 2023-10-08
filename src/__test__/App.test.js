import React from "react";
import { shallow } from "enzyme";
import App from "../App";

describe("Testing App", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders specedic element", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("UserList")).toHaveLength(1);
  });


});
