import * as actionTypes from './actionTypes';
import { repoService } from '../../services/repoService';

export const setRepos = (repos) => {
    return {
        type: actionTypes.SET_REPOS,
        repos: repos
    };
};

export const setSingleRepo = (repo) => {
    return {
        type: actionTypes.SET_SINGLE_REPO,
        singleRepo: repo
    };
};

export const setSingleRepoId = (id) => {
    return {
        type: actionTypes.SET_SINGLE_REPO_ID,
        singleRepoId: id
    };
};

export const fetchReposFailed = () => {
    return {
        type: actionTypes.FETCH_REPOS_FAILED
    };
};

export const fetchSingleRepoFailed = () => {
    return {
        type: actionTypes.FETCH_SINGLE_REPO_FAILED
    };
};

export const fetchRepos = (id) => {
    return dispatch => {
        repoService.getRepos(id)
        .then(response => {
            dispatch(setRepos(response))
        })
        .catch(() => fetchReposFailed())
    };
};

export const fetchSingleRepo = (id) => {
    console.log(id);
    return dispatch => {
        repoService.getSingleRepo(id)
        .then(response => {
            dispatch(setSingleRepo(response))
        })
        .catch(() => {
            dispatch(fetchSingleRepoFailed())
        })
    }
}