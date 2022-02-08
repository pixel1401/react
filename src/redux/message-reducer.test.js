import React from "react";
import messageReducer, { addMessages, delMessages } from "./message-reducer";


let defaultStore = {
    dialogs: [
        { id: 1, name: "Andrew" },
        { id: 2, name: "Era" },
        { id: 3, name: "Oleg" },
        { id: 4, name: "Dina" },
        { id: 5, name: "Victor" }
    ],
    messages: [
        { who: "mine", name: "Me", text: "My name is Erzhan" },
        { who: "aline", name: "Victor", text: "My name is victor awd a" },
        { who: "aline", name: "Victor", text: "My name is victor awd awd" },
        { who: "mine", name: "Me", text: "I am a  popover and I can have text and everything Erzhan awdawda " },
        { who: "aline", name: "Victor", text: "I am a normal popover awdad wad awd awd" },
    ],


}


it('add messagesa reducer' , ()=> {
    let action = addMessages("It is test")

    let newState = messageReducer(defaultStore , action);

    expect(newState.messages.length).toBe(6);

})




it("delete messages " , ()=> {
    let action = delMessages(2);
    let newState = messageReducer(defaultStore , action);

    expect(newState.messages.length).toBe(4 )
})