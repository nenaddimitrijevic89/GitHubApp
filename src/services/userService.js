import { User } from "../entities/userObj";

const { baseURL } = require("../shared/baseURL");

class UserService{

    getUsers(){
        return baseURL.get('users')
        .then(response => {
            const usersList = response.data;
            const newUsersList = usersList.map(user => new User(user))
            return newUsersList;
        })
    }

    getUser(name){
        return baseURL.get(`users/${name}`)
        .then(response => new User(response.data))
    }

    searchUsers(name){
        return baseURL.get(`search/users?q=${name}`)
        .then(response => {
            const usersList = response.data.items;
            const newUsersList = usersList.map(user => new User(user))
            return newUsersList;
        })
    }
}

export const userService = new UserService(); 