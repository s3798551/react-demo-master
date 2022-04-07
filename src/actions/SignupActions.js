import axios from 'axios'


export const userSignupRequest = (userData) => {
    return dispatch => {
        return axios.post("/users/register",userData)
    }
}

export const isUserExists = (username) => {
    return dispatch => {
        return axios.get(`/users/register/${username}`,username)
    }
}