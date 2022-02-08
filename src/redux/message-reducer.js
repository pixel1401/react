const ADD_MESSAGES = "add-messages"
const DEL_MESSAGES = 'del-messages';

export const addMessages = (text) => ({ type: ADD_MESSAGES, text: text });
export const delMessages = (id)=> ({type:DEL_MESSAGES , index:id});

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

const messageReducer = (state = defaultStore, action) => {

    switch (action.type) {
        case ADD_MESSAGES:
            return {
                ...state,
                messages: [...state.messages, { who: "mine", name: "Me", text: action.text, }],
            }


        case DEL_MESSAGES:
            return {
                ...state,
                messages:state.messages.filter((e, i)=> i != action.index)
            }
        default: return state;
    };

}


export const addMessagesThunk = (text) => {
    return (dispatch) => {
        dispatch(addMessages(text))
    }
}


export default messageReducer;