import * as actionTypes from '../actions/actionTypes';

const initialState = {
    users: null,
    error: false,
    userId: null
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
                userId: action.userId
            }
        default: return state;
    }
}

export default reducer;