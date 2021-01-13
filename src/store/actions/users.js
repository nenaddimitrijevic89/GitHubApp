import * as actionTypes from './actionTypes';
import { userService } from '../../services/userService';
import { storageService } from '../../services/storageService';

export const setUsers = (users) => {
    return {
        type: actionTypes.SET_USERS,
        users: users
    }
};

export const setSearchedUsers = (users) => {
    return {
        type: actionTypes.SEARCH_USERS,
        users: users
    }
};

export const fetchUsersFailed = () => {
    return {
        type: actionTypes.FETCH_USERS_FAILED
    }
};

export const initUsers = () => {
    const users = storageService.get('users');
    if(users && users.length){
        return dispatch => {
            dispatch(setUsers(users))
        }
    }
    return dispatch => {
        userService.getUsers()
            .then(response => {
                dispatch(setUsers(response))
                storageService.set('users', response)
            })
            .catch(() => {
                dispatch(fetchUsersFailed())
            })
    };
};

export const searchUsers = (name) => {
    return dispatch => {
        userService.searchUsers(name)
        .then(response => {
            dispatch(setSearchedUsers(response))
            storageService.set('users', response)
        })
        .catch(() => {
            dispatch(fetchUsersFailed())
        })
    };
};

export const setUserId = (userId) => {
    return{
        type: actionTypes.SET_USER_ID,
        userId: userId
    };
};