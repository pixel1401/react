import _default from "yup/lib/locale";
import { getApi } from "../api";


const LOG_IN = "log-in";

export const logInAC = (email , password , rememberMe , captcha)=>({
    type:LOG_IN , 
    email:email , 
    password:password , 
    rememberMe:rememberMe,
    captcha:captcha
});


const defaultState = {
    email:"",
    password:"",
    rememberMe:true,
    captcha:0
};



const LoginReducer = (state = defaultState , action)=> {

    switch (action.type) {
        case LOG_IN: 
        return {
            ...state,
            email: action.email,
            password: action.password,
            rememberMe: action.rememberMe,
            captcha: action.captcha
        }
        
        default : 
        return state;

    }

}



export const logInThunk = ({email, password, rememberMe, captcha = 10})=> {
    return(dispatch)=> {
        getApi.logIn(email, password, rememberMe, captcha).then(res=> {
            if (res.data.resultCode === 0) {
                dispatch(logInAC(email, password, rememberMe, captcha))
            }
        })
    }
}


export default LoginReducer;