
const ADD_POST = "add-post"
const UPDATE_NEW_TEXT_POST = "updateNewTextPost";


export const addPostActionCreator = ()=> ({type:ADD_POST});

export const updateText = (text) => ({ type:UPDATE_NEW_TEXT_POST , text:text});


let defaultStore = {
    postsBase :[
                {name:"Egor" ,likeCount:"25" , text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
                {name:"Ana" ,likeCount:"25K" , text:"It is a long established fact that a reader will be distracted by the readable content o"},
                {name:"Kill" ,likeCount:"0" , text:"It is fine"},
            ],
            newText:""
}


const profileReducer = (state = defaultStore , action)=> {

    switch(action.type) {
        case ADD_POST:
            let changeText = state.newText;
            return {
                ...state,
                postsBase: [...state.postsBase, { name: "Function", likeCount: 0, text: changeText}],
                newText : ""
            }
            
        case UPDATE_NEW_TEXT_POST:
            return {
                ...state,
                newText : action.text
            }

        default: return state
    }

}

export default profileReducer;