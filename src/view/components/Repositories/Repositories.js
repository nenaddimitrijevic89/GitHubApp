import React from 'react';
import { connect } from 'react-redux';

import { Repo } from './Repo/Repo';
import { userService } from '../../../services/userService';
import './Repositories.scss';
import { User } from '../Users/User/User';
import { Loader } from '../Loader/Loader';
import { Header } from '../Header/Header';
import { ErrorMsg } from '../ErrorMsg/ErrorMsg';
import * as actions from '../../../store/actions/repos';

class Repositories extends React.Component{
    state={
        user: null,
        isLoading: true
    }

    componentDidMount(){
        userService.getUser(this.props.userId)
        .then(response => this.setState({ user: response }))
        .catch(() => this.setState({ hasError: true }))
        .finally(() => this.setState({ isLoading: false }))

        
        this.props.onFetchRepos(this.props.userId);
    }

    render(){
        let userAndRepo = this.props.error ? <ErrorMsg /> : <Loader />;

        let repos = null;
        if(this.props.repos && this.state.user){
            repos = (
                this.props.repos.map(repo => 
                    <Repo
                        userName={this.state.user.name}
                        isDetailed={false}
                        key={repo.id}
                        name={repo.name}
                        description={repo.description}
                        created={repo.created}
                        stargazers={repo.stargazers}
                        watchers={repo.watchers}
                        forks={repo.forks}
                        license={repo.license}
                    />
                )
            )
        }
        if(this.props.repos && this.state.user){
            userAndRepo = (
                <>
                    <Header isMain={false}/>
                    <div className='containerRepo'>
            
                        <User
                            avatar={this.state.user.avatar}
                            name={this.state.user.name}
                            bio={this.state.user.bio}
                            fullName={this.state.user.fullName}
                            isDetailed={true}
                        />
                    </div>
                    <div className='containerRepo'>
                        {repos}
                    </div>
                </>
            )
        }
        return(
            <>
                {userAndRepo}
            </>    
        )
    }
};

const mapStateToProps = state => {
    return {
        userId: state.users.userId,
        repos: state.repos.repos,
        error: state.repos.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchRepos: (id) => dispatch(actions.fetchRepos(id))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Repositories);