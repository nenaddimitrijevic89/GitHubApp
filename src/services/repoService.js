import { Repo } from "../entities/repoObj";

const { baseURL } = require("../shared/baseURL");

class RepoService{

    getRepos(name){
        return baseURL.get(`users/${name}/repos`)
        .then(response => {
            const reposList = response.data;
            const newReposList = reposList.map(repo => new Repo(repo))
            return newReposList;
        })
    }

    getSingleRepo(repo){
        return baseURL.get(`repos/${repo}`)
        .then(response => new Repo(response.data))
    }
}

export const repoService = new RepoService();