import _default from "yup/lib/locale";
import { getApi } from "../api";
import { getMeTh, logOutAC } from "./header-reducer";


const IS_FETCHING = "isFetching";

export const isFetchingAC = (bool , error)=>({type:IS_FETCHING , value:bool , error:error}); 


const defaultState = {
    email:"",
    password:"",
    rememberMe:true,
    captcha:0,

    isFetching:false,
    loginError:false
};



const LoginReducer = (state = defaultState , action)=> {

    switch (action.type) {
        case IS_FETCHING: 
            return {
                ...state,
                isFetching:action.value,
                loginError:action.error
            }
        default : return state;

    }

}



export const logInThunk = (form , error)=> {
    return(dispatch)=> {
        let { email, password, rememberMe= false, captcha=10 } = form;
        getApi.logIn(email, password, rememberMe, captcha).then(res=> {
            if (res.data.resultCode === 0) {
                dispatch(getMeTh())
                dispatch(isFetchingAC(true, false))
            }else {
                dispatch(isFetchingAC(false , "Ошибка, неправильный логин или пароль"))
                // error({ error: res.data.messages })

            }
        })
    }
}


export const logOutThunk = ()=> {
    return(dispatch)=> {
        getApi.logOut().then(res=> {
            if (res.data.resultCode === 0) {
                dispatch(logOutAC())
                dispatch(isFetchingAC(false, false))
            }
        })
    }
}






export default LoginReducer;