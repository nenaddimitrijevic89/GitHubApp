import { convertDate } from '../shared/utilities';

class Repo {
    constructor(repo){
        this.id = repo.id;
        this.name = repo.name;
        this.description = repo.description ? repo.description.slice(0, 85) : 'no description';
        this.created = convertDate(repo.created_at);
        this.stargazers = repo.stargazers_count;
        this.watchers = repo.watchers_count;
        this.forks = repo.forks_count;
        this.license = repo.license ? repo.license.name : 'no license';
    }
}

export { Repo };