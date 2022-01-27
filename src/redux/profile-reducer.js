import { getApi } from "../api";

const ADD_POST = "add-post";
const UPDATE_NEW_TEXT_POST = "updateNewTextPost";
const GET_PROFILE = "get-profile";
const GET_STATUS = "get-status";

export const addPostActionCreator = (text) => ({ type: ADD_POST , text:text });


export const profileAC = (arr) => ({type:GET_PROFILE , base:arr});
export const getStatus = (text) =>({type:GET_STATUS ,  userStatus: text});


let defaultStore = {
    postsBase: [
        { name: "Egor", likeCount: "25", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
        { name: "Ana", likeCount: "25K", text: "It is a long established fact that a reader will be distracted by the readable content o" },
        { name: "Kill", likeCount: "0", text: "It is fine" },
    ],
    profile:null,
    userStatus:"",
    myStatus:"",
}


const profileReducer = (state = defaultStore, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postsBase: [...state.postsBase, { name: "Function", likeCount: 0, text: action.text }],
               
            }

        case UPDATE_NEW_TEXT_POST:
            return {
                ...state,
                newText: action.text
            }
            
        case GET_PROFILE:
            return {
                ...state,
                profile:action.base
            }

        case GET_STATUS:
            return {
                ...state,
                userStatus:action.userStatus
                
            }
        
        default: return state
    }

}



export const addPostThunk = (text)=> {
    return (dispatch)=> {
        dispatch(addPostActionCreator(text))
    }
}



export const getProfile = (userId)=> {
    return (dispatch)=> {
        getApi.alienProfile(userId).then((res) => {
            dispatch(profileAC(res.data))
        })
        getApi.getStatus(userId).then((res)=> {
            dispatch(getStatus(res.data))
        })
    }
}


export const changeStatusTh = (text)=> {
    return(dispatch) => {
        getApi.putStatus(text).then((res)=> {
            if (res.data.resultCode === 0) {
                dispatch(getStatus(text))
            }
        })
    }
}




export default profileReducer;