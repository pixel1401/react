import { getApi } from "../api";

const SET_USER_DATA = 'set-user-data';
const LOADING = "loading";
 
export const setUserDataAC = (userData)=> ({type:SET_USER_DATA , user:userData})
export const isLoading = (bool)=> ({type:LOADING , value:bool})

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
        default : return state
    }
    
}

export const getMeTh = ()=> {
    return (dispatch) => {
        getApi.getMe().then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setUserDataAC(res.data.data));
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
