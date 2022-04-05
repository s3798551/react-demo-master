import { SET_CURRENT_USER } from '../constants'
import isEmpty from 'lodash/isEmpty'

const  initialState = {
    isAuth:false,
    user:{}
}

const auth = (state = {}, active) => {
    switch (active.type) {
        case SET_CURRENT_USER:
            return{
                isAuth:!isEmpty(active.user),
                user:active.user
            }

        default:
           return state;
    }
}
export default auth;