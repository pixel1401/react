import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatus from './Profile-status';


describe("btn" , ()=> {
    test("SHow status" , ()=> {
        const component = create(<ProfileStatus userStatus="It"/>);
        const root = component.getInstance();
        expect(root.state.title).toBe("It");
    })

    test("SHow status span", () => {
        const component = create(<ProfileStatus userStatus="It" />);
        const root = component.root;
        let div =  root.findByType("div");
        expect(div).not.toBeNull();
    })
})