const FOLLOW = "follow";
const SET_USERS = "set-users";
const CHANGE_PAGE = 'change-page';
const TOTAL_COUNT = 'total-count';


export const followAction = (value, id) => ({ type: FOLLOW, bool: value, id: id });
export const setUsersAction = (usersArr) => ({ type: SET_USERS, usersArr });
export const changePageAction = (numPage) => ({type:CHANGE_PAGE , curPage: numPage});
export const totalCountAction = (num)=> ({type:TOTAL_COUNT , totalCount:num});

// props.setUsersAction(
        //     [
        //         { id: 1, name: "Erzhan", country: 'Kazakhstan', city: "Astana", quote: "It's my life", status: "Follow" },
        //         { id: 2, name: "Chan-long", country: 'China', city: "Pekin", quote: "lorem lorem lore", status: "Unfollow" },
        //         { id: 3, name: "Naruto", country: 'Japan', city: "Tokyo", quote: "It's my life aw dwad a", status: "Follow" },
        //         { id: 4, name: "Oleg-Mongol ))", country: 'Russia', city: "Moscow", quote: "I am from Russia", status: "Follow" },
        //         { id: 5, name: "Mike Jordan", country: 'USA', city: "Texas", quote: "I dont from Russia", status: "Follow" },
        //         { id: 6, name: "Dina", country: 'Russia', city: "Moscow", quote: "I am from Russia", status: "UnFollow" },
        //     ]
        // )

let userState = {
    usersPage: [],
    count:10,
    totalItems:55,
    currentPage:1

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

        case CHANGE_PAGE :
            return {
                ...state,
                currentPage:action.curPage
            }

        case TOTAL_COUNT:
            return {
                ...state,
                totalItems: action.totalCount
            }
        default: return state;

    }


}

export default usersReducer;