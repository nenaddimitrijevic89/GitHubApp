import * as actionTypes from './actionTypes';
import { userService } from '../../services/userService';

export const setUsers = (users) => {
    return {
        type: actionTypes.SET_USERS,
        users: users
    }
};

export const fetchUsersFailed = () => {
    return {
        type: actionTypes.FETCH_USERS_FAILED
    }
};

export const initUsers = () => {
    return dispatch => {
        userService.getUsers()
            .then(response => {
                dispatch(setUsers(response))
            })
            .catch(() => {
                dispatch(fetchUsersFailed())
            })
    }
}