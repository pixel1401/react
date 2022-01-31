import { getApi } from "../api";
import { getFollowedUsers } from "./frends-reducer";

const SET_USER_DATA = 'set-user-data';
const LOADING = "loading";
const LOG_OUT = "log-out"; 
// const LOG_IN = "log-in"; 


export const setUserDataAC = (userData)=> ({type:SET_USER_DATA , user:userData})
export const isLoading = (bool)=> ({type:LOADING , value:bool})
export const logOutAC = ()=> ({type:LOG_OUT})
// export const logInAC = (email, password, rememberMe, captcha)=>({
//     type:LOG_IN , 
//     email:email , 
//     password:password , 
//     rememberMe:rememberMe,
//     captcha:captcha
// })

let headerBase = {
    id:null,
    login:null,
    email:null,
    isAuth:false,

    isLoading:true
    
}


const HeaderReducer = (state = headerBase , action) => {

    switch (action.type) {
        case SET_USER_DATA:
            let { id, login, email} = action.user
            return {
                ...state,
                id: id,
                login: login,
                email: email,
                isAuth: true
            }

        case LOADING: 
            return {
                ...state,
                isLoading:action.value
            }

        case LOG_OUT:
            return {
                ...state,
                id: null,
                login: null,
                email: null,
                isAuth: false,
                isLoading: false
            }
        default : return state
    }
    
}
export const getMeTh = ()=> {
    return (dispatch) => {
        getApi.getMe().then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setUserDataAC(res.data.data));
                dispatch(getFollowedUsers())
            }
            dispatch(isLoading(false))
        })
    }
}

export const isLoadingTh = (bool)=> {
    return(dispatch) => {
        dispatch(isLoading(bool));
    }
}

export default HeaderReducer;
