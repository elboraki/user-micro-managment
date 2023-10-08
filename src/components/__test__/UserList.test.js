import React from "react";
import {shallow} from "enzyme"
import UserList from "../UserList";


describe("User list",()=>{

    it("should  user list exists",()=>{
        const wrapper=shallow(<UserList/>)
        expect(wrapper.find('div')).toHaveLength(1)
    })
    it("should render user list",()=>{
        const wrapper=shallow(<UserList/>)
        expect(wrapper.find('div').text()).toContain('User List')
    })
})