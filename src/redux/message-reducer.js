const PRINT_MESSAGES = "messages";
const ADD_MESSAGES = "add-messages"


// MESSAGES COMPONENT DIALOG
export const printMessages = (text)=> ({type:PRINT_MESSAGES, text:text});

export const addMessages = ()=> ({type:ADD_MESSAGES});


let defaultStore = {
    dialogs : [
                {id:1,name:"Andrew"},
                {id:2,name:"Era"},
                {id:3,name:"Oleg"},
                {id:4,name:"Dina"},
                {id:5,name:"Victor"}
            ],
            messages : [
                {who:"mine" , name:"Me" , text:"My name is Erzhan"},
                {who:"aline" , name:"Victor" , text:"My name is victor awd a"},
                {who:"aline" , name:"Victor" , text:"My name is victor awd awd"},
                {who:"mine" , name:"Me" , text:"I am a  popover and I can have text and everything Erzhan awdawda "},
                {who:"aline" , name:"Victor" , text:"I am a normal popover awdad wad awd awd"},
            ],

            change_text:""
}

const messageReducer = (state = defaultStore , action) => {

    switch(action.type) {
        case PRINT_MESSAGES:
            return {
                ...state,
                change_text: action.text
            }

        case ADD_MESSAGES:
            let changeText = state.change_text
            return {
                ...state,
                messages: [...state.messages, { who: "mine", name: "Me", text: changeText ,}],
                change_text: ''
            }

        default:return state;
    };

}


export default messageReducer;