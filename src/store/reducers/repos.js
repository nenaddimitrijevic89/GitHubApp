import * as actionTypes from '../actions/actionTypes';

const initialState = {
    repos: null,
    error: false
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SET_REPOS:
            return{
                ...state,
                repos: action.repos
            }
        case actionTypes.FETCH_REPOS_FAILED:
            return{
                ...state,
                error: true
            }
        default: return state; 
    }
};

export default reducer;