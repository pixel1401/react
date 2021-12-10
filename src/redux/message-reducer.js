const PRINT_MESSAGES = "messages";
const ADD_MESSAGES = "add-messages"


// MESSAGES COMPONENT DIALOG
export const printMessages = (text)=> ({type:PRINT_MESSAGES, text:text});

export const addMessages = ()=> ({type:ADD_MESSAGES});


const messageReducer = (state , action) => {

    switch(action.type) {
        case PRINT_MESSAGES:
            state.change_text = action.text;
            return state

        case ADD_MESSAGES:
            let newMessage = {
                who:"mine",
                name:"Me",
                text:state.change_text
            };

            state.messages.push(newMessage);
            state.change_text = "";

            return state

        default:return state;
    };



}


export default messageReducer;