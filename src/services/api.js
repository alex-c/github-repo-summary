import axios from 'axios';

export default {
    getUser: async user => {
        user = await axios.get(`https://api.github.com/users/${user}`);
        return user.data;
    }
}