import { getApi } from "../api";

const FOLLOWED_USERS = 'followed-users';

export const followedUsers = (arr)=> ({type:FOLLOWED_USERS , users:arr});



// friendsLink: [
//     { id: 1, name: "Andrew" },
//     { id: 2, name: "Era" },
//     { id: 3, name: "Oleg" },
//     { id: 4, name: "Dina" },
//     { id: 5, name: "Victor" }
// ]

const defaultUsers = {
    followedUsers:null,
}

const friendsReducer = (state = defaultUsers  , action) => {
    switch (action.type ){
        case FOLLOWED_USERS: 
            return {
                ...state,
                followedUsers:action.users
            }

        default: return state;
    }
}



export const getFollowedUsers = (count = 10, curPage = 1, term = '', friend = true )=> {
    return (dispatch)=> {
        getApi.getFollowedUsers(count, curPage, term, friend).then ((res)=> {
            dispatch(followedUsers(res.data.items))
        }).catch((err)=> {
            console.log('ERRRR')
        })
    }
}




export default friendsReducer;