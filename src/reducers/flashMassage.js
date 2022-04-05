import { ADD_FLASH_MASSAGE,DELETE_FLASH_MASSAGE } from '../constants'
import shortid from 'shortid'
import findIndex from "lodash/findIndex"




const flashMassages = (state = [],action = {}) =>{
    switch (action.type) {

    
        case ADD_FLASH_MASSAGE:
            return [
                ...state,
                {
                    id:shortid.generate(),
                    type:action.massage.type,
                    text:action.massage.text
                }
            ];


        case DELETE_FLASH_MASSAGE:
            const index = findIndex(state,{ id:action.id })
            if (index >=0 ) {
                return[
                    ...state.slice(1,index),
                    ...state.slice(index+1)
                ]
            }
            return state;

        default:
            return state;
    }
} 

export default flashMassages