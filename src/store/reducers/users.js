import * as actionTypes from '../actions/actionTypes';

const initialState = {
    users: null,
    error: false,
    userId: null,
    singleUser: null
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_USERS:
            return {
                ...state,
                users: action.users,
                error: false
            }
        case actionTypes.FETCH_USERS_FAILED:
            return {
                ...state,
                error: true
            }
        case actionTypes.SEARCH_USERS:
            return {
                ...state,
                users: action.users,
                error: false
            }
        case actionTypes.SET_USER_ID:
            return {
                ...state,
                userId: action.userId,
                error: false
            }
        case actionTypes.SET_SINGLE_USER:
            return {
                ...state,
                singleUser: action.singleUser,
                error: false
            }
        case actionTypes.FETCH_SINGLE_USER_FAILED:
            return {
                ...state,
                error: true
            }
        case actionTypes.RESET_USER:
            return {
                ...state,
                singleUser: null,
                userId: null
            }
        default: return state;
    }
}

export default reducer;