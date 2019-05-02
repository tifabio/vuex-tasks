import axios from 'axios'

export default axios.create({
    baseURL: 'https://vuex-tasks.firebaseio.com/'
});