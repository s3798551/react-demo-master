import {ADD_FLASH_MASSAGE,DELETE_FLASH_MASSAGE} from '../constants'

export const addFlashMassage = (massage) =>{
    return{
        type:ADD_FLASH_MASSAGE,
        massage
    }
}

//通过 id 删除提示
export const deleteFlashMassage = (id) =>{
    return{
        type:DELETE_FLASH_MASSAGE,
        id
    }
}