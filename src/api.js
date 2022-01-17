import axios from "axios";


const instanse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "api-key": "ad8931ac-5d88-4d95-b6cd-fd98f9f9bad0"
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
    }

}




