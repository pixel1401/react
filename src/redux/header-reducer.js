const SET_USER_DATA = 'set-user-data';
 
export const setUserDataAC = (userData)=> ({type:SET_USER_DATA , user:userData})


let headerBase = {
    id:null,
    login:null,
    email:null,
    isAuth:false
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

        default : return state
    }
    
}


export default HeaderReducer;
