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
        // 取消请求头中的信息
        setAuthToken(false)
        // 清楚Redux中的数据
        dispatch(setCurrentUser({}))
    }
}


//请求登录数据
export const userloginAction = (data) => {
    return dispatch =>{
        return axios.post("/api/login",data ).then(res => {
            const token = res.data;
            localStorage.setItem("jwToken",token)
            setAuthToken(token)
            dispatch(setCurrentUser(Decode(token)))
        })
    }
}