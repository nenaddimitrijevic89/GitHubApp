import React from 'react';
import { repoService } from '../../../../services/repoService';
import { ErrorMsg } from '../../ErrorMsg/ErrorMsg';
import { Header } from '../../Header/Header';
import { Loader } from '../../Loader/Loader';
import { Repo } from '../Repo/Repo';
import './SingleRepo.scss';

class SingleRepo extends React.Component{
    state={
        repo: null,
        hasError: false
    }

    componentDidMount(){
        const url=this.props.match.url.slice(14)
        repoService.getSingleRepo(url)
        .then(response => this.setState({ repo: response }))
        .catch(() => this.setState({ hasError: true }))
    }

    render(){
        if(this.state.hasError){
            return <ErrorMsg />
        }
        return(
            <>
                <Header isMain={true}/>
                <div className='containerSingleRepo'>
                    {this.state.repo
                    ?<Repo 
                        isDetailed={true}
                        name={this.state.repo.name}
                        description={this.state.repo.description}
                        created={this.state.repo.created}
                        stargazers={this.state.repo.stargazers}
                        watchers={this.state.repo.watchers}
                        forks={this.state.repo.forks}
                        license={this.state.repo.license}
                        userName={''}
                    />
                    : <Loader />
                    }
                </div>
            </>
        )
    }
}

export { SingleRepo };