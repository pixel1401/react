import axios from "axios";


const instanse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "api-key": "41314092-c939-4a26-82db-e9f706ec5db9"
    }
})


export const getApi =   {
    getPage(count = 10 , curPage=1) {
        return instanse.get(`users?count=${count}&page=${curPage}`)
    },

    getActivePage (count , e) {
        return instanse.get(`users?count=${count}&page=${e}`)
    },

    follow(id) {
        return instanse.post(`follow/${id}`)
    },
    unfollow(id) {
        return instanse.delete(`follow/${id}`)
    },

    getMe() {
        return instanse.get(`auth/me`);
    },

    alienProfile(userId) {
        return instanse.get(`profile/${userId}`);
    }

}




