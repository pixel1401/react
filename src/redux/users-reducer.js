import { getApi } from "../api";
import { getFollowedUsers } from "./frends-reducer";

const FOLLOW = "follow";
const SET_USERS = "set-users";
const CHANGE_PAGE = 'change-page';
const TOTAL_COUNT = 'total-count';
const TOGGLE_IS_FETCHING = 'toggle-is-fetching';
const ARR_POS_PAGE = "arr-pos-page";
const PROGRES = 'progres';


export const followAction = (value, id) => ({ type: FOLLOW, bool: value, id: id });
export const setUsersAction = (usersArr) => ({ type: SET_USERS, usersArr });
export const changePageAction = (numPage) => ({ type: CHANGE_PAGE, curPage: numPage });
export const totalCountAction = (num) => ({ type: TOTAL_COUNT, totalCount: num });
export const IsFetchingAction = (bool) => ({ type: TOGGLE_IS_FETCHING, value: bool })
export const arrPosPageAC = (arr) => ({ type: ARR_POS_PAGE, pos: arr });
export const isProgres = (bool) => ({ type: PROGRES, value: bool });


let userState = {
    usersPage: [],
    count: 10,
    totalItems: 55,
    currentPage: 1,
    isFetching: false,
    arrPage: [],
    totalNumOfPages: null,
    isLastPage: false,
    countPages: 15,

    progres: false
}


// PagesLi function


function showPages(countItams = 10, pages = 15) {
    let totalNumOfPages = Math.ceil(this.totalItems / countItams);
    this.totalNumOfPages = totalNumOfPages;

    const range = (x, y) => x > y ? [] : [x, ...range(x + 1, y)];

    // Index when click pages
    let indexCurrentPages = this.arrPage.indexOf(this.currentPage);
    let indexNextPage = pages - 4;

    let rangeNextPages = () => {
        let c = this.currentPage + (pages - 3)
        return range(this.currentPage - 1, c > totalNumOfPages ? totalNumOfPages : c)
    }
    let compareIndexNextPages = (indexCurrentPages === pages - 3 || indexCurrentPages === pages - 4) ? true : false;

    let prevShowPages = () => {
        let a = this.currentPage - (pages - 5)
        let c = (this.currentPage + pages + 4)
        let arr = range(a <= 1 ? 2 : a, c > totalNumOfPages ? totalNumOfPages : c);
        arr.length = pages - 1;
        return arr;
    }



    (this.currentPage === totalNumOfPages) ? this.isLastPage = true : this.isLastPage = false;


    if (this.currentPage === 1) {
        return this.arrPage = range(1, pages);
    } else if (indexCurrentPages < indexNextPage && indexCurrentPages !== -1 && this.currentPage < totalNumOfPages - 2) {
        if (this.currentPage !== 2 && indexCurrentPages === 1) {
            return this.arrPage = [1, ...prevShowPages()]
        } else {
            return this.arrPage;
        }
    } else if (compareIndexNextPages) {
        return this.arrPage = [1, ...rangeNextPages.bind(this)()];
    } else if (this.currentPage === totalNumOfPages) {
        return (this.arrPage = [1, ...range(totalNumOfPages - (pages - 2), totalNumOfPages)])
    }
}




const usersReducer = (state = userState, action) => {

    switch (action.type) {
        case FOLLOW:
            let userPageNewArr = [];
            state.usersPage.map((el) => {
                if (el.id === +action.id) {
                    action.bool === true ? el.followed = true : el.followed = false;
                }

                return userPageNewArr.push(el);
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

        case CHANGE_PAGE:
            return {
                ...state,
                currentPage: action.curPage,
            }

        case TOTAL_COUNT:
            return {
                ...state,
                totalItems: action.totalCount
            }

        case TOGGLE_IS_FETCHING:
            showPages.bind(state)();
            return {
                ...state,
                isFetching: action.value
            }

        case ARR_POS_PAGE:
            return {
                ...state,
                arrPositionPage: action.pos
            }

        case PROGRES:
            return {
                ...state,
                progres: action.value
            }
        default: return state;

    }


}



// Получаеть массив пользователей в количестве count    
export const getUsers = (count, curPage) => {
    return (dispatch) => {
        dispatch(IsFetchingAction(true))
        getApi.getPage(usersReducer.count, curPage)
            .then((res) => {
                dispatch(setUsersAction(res.data.items))
                dispatch(totalCountAction(res.data.totalCount))
                dispatch(IsFetchingAction(false))
                
            })

        dispatch(changePageAction(curPage));
        dispatch(getFollowedUsers())
    }
}


// Отписка и подписка
export const changeFollowTh = (id, isFollow) => {
    return (dispatch) => {
        dispatch(isProgres(true));

        function response() {
            dispatch(followAction(isFollow, id));
            dispatch(isProgres(false))
        }

        let promise = (isFollow) 
        ? getApi.follow(id).then((res) => {
                response()
            })
        : getApi.unfollow(id).then((res) => {
                response()
            })


        Promise.all([promise]).then((res)=> {
            dispatch(getFollowedUsers())
        })

    }
}


export default usersReducer;