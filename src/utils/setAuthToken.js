import axios from 'axios'

const setAuthToken = (token) =>{
    if(token){
        axios.defaults.headers.common['AuthToken'] = `Lyxxx ${token}`
    }else{
        delete axios.defaults.headers.common['AuthToken']
    }
}

export default setAuthToken