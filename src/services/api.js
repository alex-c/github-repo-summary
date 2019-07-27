import axios from 'axios';

export default {

    getUser: async userName => {
        let user = await axios.get(`https://api.github.com/users/${userName}`);
        return user.data;
    },

    getUserRepositories: (url, page) => {
        return axios.get(`${url}?page=${page}&per_page=100`);
    }

}