import validator from 'validator'
import isEmpty from 'lodash/isEmpty'

const validataInput = (data) => {
    const errors = {};
    if(validator.isEmpty(data.username)){
        errors.username = "Please input email!"
    }
    if(validator.isEmpty(data.password)){
        errors.password = "Please input password！"
    }

    return {
        errors,
        isValid:isEmpty(errors)
    }
}

export default validataInput