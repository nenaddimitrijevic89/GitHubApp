import profile from '../images/user.png';

class User{
    constructor(user){
        this.avatar = user.avatar_url ? user.avatar_url : profile;
        this.name = user.login;
        this.id = user.id;
        this.fullName = user.name ? user.name.slice(0, 20) : 'unknown';
        this.bio = user.bio ? user.bio.slice(0, 20) : 'no description';
    }
}

export { User }