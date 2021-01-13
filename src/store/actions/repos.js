import * as actionTypes from './actionTypes';
import { userService } from '../../services/userService';
import { repoService } from '../../services/repoService';

export const setRepos = (repos) => {
    return{
        type: actionTypes.SET_REPOS,
        repos: repos
    };
};

export const fetchReposFailed = () => {
    return{
        type: actionTypes.FETCH_REPOS_FAILED
    }
}

export const fetchRepos = (id) => {
    return dispatch => {
        repoService.getRepos(id)
        .then(response => {
            dispatch(setRepos(response))
        })
        .catch(() => fetchReposFailed())
    }
};