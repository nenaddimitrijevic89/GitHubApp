import React from 'react';
import { connect } from 'react-redux';

import { Repo } from './Repo/Repo';
import './Repositories.scss';
import { User } from '../Users/User/User';
import { Loader } from '../Loader/Loader';
import { Header } from '../Header/Header';
import { ErrorMsg } from '../ErrorMsg/ErrorMsg';
import * as repoActions from '../../../store/actions/repos';
import * as usersActions from '../../../store/actions/users';

class Repositories extends React.Component{
   
    componentDidMount(){
        this.props.onFetchSingleUser(this.props.userId);
        this.props.onFetchRepos(this.props.userId);
    }

    render(){
        let userAndRepo = (this.props.repError || this.props.userError) ? <ErrorMsg /> : <Loader />;

        let repos = null;
        if(this.props.repos && this.props.singleUser){
            repos = (
                this.props.repos.map(repo => 
                    <Repo
                        userName={this.props.singleUser.name}
                        isDetailed={false}
                        key={repo.id}
                        name={repo.name}
                        description={repo.description}
                        created={repo.created}
                        stargazers={repo.stargazers}
                        watchers={repo.watchers}
                        forks={repo.forks}
                        license={repo.license}
                        setRepoId={this.props.onSetSingleRepoId}
                    />
                )
            )
        }
        if(this.props.repos && this.props.singleUser){
            userAndRepo = (
                <>
                    <Header isMain={false} resetId={this.props.onResetUserId}/>
                    <div className='containerRepo'>
                        <User
                            avatar={this.props.singleUser.avatar}
                            name={this.props.singleUser.name}
                            bio={this.props.singleUser.bio}
                            fullName={this.props.singleUser.fullName}
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
        singleUser: state.users.singleUser,
        userError: state.users.error,
        repos: state.repos.repos,
        repError: state.repos.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchRepos: (id) => dispatch(repoActions.fetchRepos(id)),
        onFetchSingleUser: (id) => dispatch(usersActions.fetchSingleUser(id)),
        onResetUserId: () => dispatch(usersActions.resetUserId()),
        onSetSingleRepoId: (id) => dispatch(repoActions.setSingleRepoId(id))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Repositories);