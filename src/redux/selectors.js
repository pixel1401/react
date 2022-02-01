// DIALOG
export const getDialog = (state) => {
    return state.dialogComponent.dialogs;
}
export const getMessages = (state)=> {
    return state.dialogComponent.messages;
}


// HEADER
export const getLogin = (state)=> {
    return state.header.login;
}
export const getId = (state) => {
    return state.header.id;
}
export const getEmail = (state) => {
    return state.header.email;
}
export const isAuth = (state) => {
    return state.header.isAuth;
}
export const isLoading = (state) => state.header.isLoading;


// LOGIN
export const isFetching = (state)=> {
    return state.login.isFetching;
}
export const showTextErrorLogin = (state) => {
    return state.login.loginError;
}


// PROFILE
export const getPosts = (state)=> {
    return state.profileComponent.postsBase;  
};
export const getProfileSelect = (state) => {
    return state.profileComponent.profile;
};
export const getStatus = (state) => {
    return state.profileComponent.userStatus;
};
export const getMyStatus = (state) => {
    return state.profileComponent.myStatus;
};
export const getUserId = (state) => state.profileComponent.userId
export const is_Profile_and_Status = (state) => state.profileComponent.isProfile



// Sidebar(NAV) 
export const getFriends = (state)=> {
    return state.friends.followedUsers;
}


// USERS pagnitation
export const getUsersSelect = (state) => state.users.usersPage
export const getCountUsersFirstPage = (state) => state.users.count
export const getCurrentPage = (state) => state.users.currentPage
export const isFetchingUsers = (state) => state.users.isFetching
export const getTotalPages = (state) => state.users.totalNumOfPages
export const getArrPagnitations = (state) => state.users.arrPage
export const isLastPagnitation = (state) => state.users.isLastPage
export const isProgress = (state) => state.users.progres
export const getFirstPageCountPagnitations = (state) => state.users.count;



// WORKS
export const getWorks = (state) => state.workComponent.baseWork;