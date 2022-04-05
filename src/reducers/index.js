import { combineReducers } from 'redux'
import auth from './auth'
import flashMassage from './flashMassage'

const rootReducer = combineReducers({
    auth,
    flashMassage
})
export default rootReducer