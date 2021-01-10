import React from 'react';
import { Repo } from './Repo/Repo';
import { repoService } from '../../../services/repoService';
import { userService } from '../../../services/userService';
import './Repositories.scss';
import { User } from '../Users/User/User';
import { Loader } from '../Loader/Loader';
import { Header } from '../Header/Header';
import { ErrorMsg } from '../ErrorMsg/ErrorMsg';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';

class Repositories extends React.Component{
    state={
        user: null,
        repos: [],
        isLoading: true,
        hasError: false
    }

    componentDidMount(){
        userService.getUser(this.props.match.params.id)
        .then(response => this.setState({ user: response }))
        .catch(() => this.setState({ hasError: true }))
        .finally(() => this.setState({ isLoading: false }))
        
        
        repoService.getRepos(this.props.match.params.id)
        .then(response => this.setState({ repos: response }))
        .catch(() => this.setState({ hasError: true }))
        .finally(() => this.setState({ isLoading: false }))
    }

    render(){
        if(this.state.isLoading){
            return <Loader />
        }
        return(
            <>
                {this.state.hasError
                
                ?<ErrorMsg />

                :<>
                    <Header isMain={false}/>
                    <div className='containerRepo'>
                        <ErrorBoundary>
                        <User
                            avatar={this.state.user.avatar}
                            name={this.state.user.name}
                            bio={this.state.user.bio}
                            fullName={this.state.user.fullName}
                            isDetailed={true}
                        /></ErrorBoundary>
                    </div>
                    <div className='containerRepo'>
                        {this.state.repos.map(repo => 
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
                        )}
                    </div>
                </>
                }
            </>    
        )
    }
}

export { Repositories }