const FOLLOW = "follow";
const SET_USERS = "set-users"

export const followAction = (value, id) => ({ type: FOLLOW, bool: value, id: id });
export const setUsersAction = (usersArr) => ({ type: SET_USERS, usersArr });


let userState = {
    usersPage: []
}


const usersReducer = (state = userState, action) => {

    switch (action.type) {
        case FOLLOW:
            let userPageNewArr = [];
            state.usersPage.map((el) => {
                if (el.id === +action.id) {
                    action.bool === true ? el.followed = false : el.followed = true;
                }

                userPageNewArr.push(el);
            });

            return {
                ...state,
                usersPage: userPageNewArr
            };

        case SET_USERS:
            return {
                ...state,
                usersPage: [...action.usersArr]
            };

        default: return state;

    }


}

export default usersReducer;