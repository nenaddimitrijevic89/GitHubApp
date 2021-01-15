import * as actionTypes from '../actions/actionTypes';

const initialState = {
    repos: null,
    singleRepo: null,
    singleRepoId: null,
    error: false
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SET_REPOS:
            return {
                ...state,
                repos: action.repos,
                error: false
            }
        case actionTypes.FETCH_REPOS_FAILED:
            return {
                ...state,
                error: true
            }
        case actionTypes.SET_SINGLE_REPO_ID:
            return {
                ...state,
                singleRepoId: action.singleRepoId,
                error: false
            }
        case actionTypes.SET_SINGLE_REPO:
            return {
                ...state,
                singleRepo: action.singleRepo,
                error: false
            }
        case actionTypes.RESET_SINGLE_REPO:
            return {
                ...state,
                singleRepo: null,
                singleRepoId: null,
                error: false
            }
        case actionTypes.FETCH_SINGLE_REPO_FAILED:
            return {
                ...state,
                error: true
            }
        default: return state; 
    };
};

export default reducer;