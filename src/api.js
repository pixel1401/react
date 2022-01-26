import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "api-key": "41314092-c939-4a26-82db-e9f706ec5db9"
    }
})


export const getApi =   {
    getPage(count = 10 , curPage=1) {
        return instance.get(`users?count=${count}&page=${curPage}`)
    },

    getActivePage (count , e) {
        return instance.get(`users?count=${count}&page=${e}`)
    },

    
    follow(id) {
        return instance.post(`follow/${id}`)
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)
    },

    
    getMe() {
        return instance.get(`auth/me`);
    },

    
    alienProfile(userId) {
        return instance.get(`profile/${userId}`);
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    putStatus(text) {
        return instance.put(`/profile/status` , {status:text});
    }

}




