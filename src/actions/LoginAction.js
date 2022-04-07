import axios from 'axios'
// token
import setAuthToken from '../utils/setAuthToken'
import { SET_CURRENT_USER } from '../constants'
import Decode from 'jwt-decode'

export const setCurrentUser = (user) =>{
    return {
        type:SET_CURRENT_USER,
        user
    }
}

export const logout = () =>{
    return dispatch => {
        localStorage.removeItem("jwToken");
        setAuthToken(false)
        dispatch(setCurrentUser({}))
    }
}


export const userloginAction = (data) => {
    return dispatch =>{
        return axios.post("/users/login",data ).then(res => {
            const token = res.data;
            localStorage.setItem("jwToken",token)
            setAuthToken(token)
            dispatch(setCurrentUser(Decode(token)))
        })
    }
}