import axios from 'axios';

export default {

    getUser: async userName => {
        let user = await axios.get(`https://api.github.com/users/${userName}`);
        return user.data;
    },

    getUserRepositories: async (url, page) => {
        let repositories = await axios.get(`${url}?page=${page}&per_page=100`);
        return repositories.data;
    }

}