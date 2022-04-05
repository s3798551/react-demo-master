import axios from 'axios'

//  用户数据
export const userSignupRequest = (userData) => {
    return dispatch => {
        return axios.post("/api/users",userData)
    }
}
//  请求username
export const isUserExists = (username) => {
    return dispatch => {
        return axios.get(`/api/users/${username}`,username)
    }
}