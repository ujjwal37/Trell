import axios from 'axios'

const instance = axios.create({
    baseURL : "https://admin-theatre.firebaseio.com"
})

export default instance;