
const ADD_POST = "add-post"
const UPDATE_NEW_TEXT_POST = "updateNewTextPost";


export const addPostActionCreator = ()=> ({type:ADD_POST});

export const updateText = (text) => ({ type:UPDATE_NEW_TEXT_POST , text:text});


const profileReducer = (state , action)=> {

    switch(action.type) {
        case ADD_POST:
            let newPost = {
                name:"Function",
                likeCount:0,
                text:state.newText,
            };

            state.postsBase.push(newPost);
            state.newText = "";
            
            return state
            
        case UPDATE_NEW_TEXT_POST:
            state.newText = action.text;
            return state

        default: return state
    }

}

export default profileReducer;