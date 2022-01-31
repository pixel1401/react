import { getMeTh } from "./header-reducer";



const AppReducer = ()=> {
    return null;
};



export const initializeApp = ()=> {
    return (dispatch)=> {
        let promise = dispatch(getMeTh());
        
        Promise.all([promise]).then(res=> {
            console.log("res=>" ,res);
            // console.log(promise);
        }).catch(err=> {
            console.log('err =>' ,err);
        })
    }
}


export default AppReducer;