import React from 'react';
import { connect } from 'react-redux';

import { ErrorMsg } from '../../ErrorMsg/ErrorMsg';
import { Header } from '../../Header/Header';
import { Loader } from '../../Loader/Loader';
import { Repo } from '../Repo/Repo';
import './SingleRepo.scss';
import * as actions from '../../../../store/actions/repos';

class SingleRepo extends React.Component{

    componentDidMount(){
        this.props.onFetchSingleRepo(`${this.props.userId}/${this.props.repoId}`)
    }

    render(){
        let repo = this.props.error ? <ErrorMsg /> : <Loader />;

        if(this.props.repo){
            repo = (
                <>
                    <Header isMain={true}/>
                    <div className='containerSingleRepo'>
                        <Repo 
                            isDetailed={true}
                            name={this.props.repo.name}
                            description={this.props.repo.description}
                            created={this.props.repo.created}
                            stargazers={this.props.repo.stargazers}
                            watchers={this.props.repo.watchers}
                            forks={this.props.repo.forks}
                            license={this.props.repo.license}
                            userName={''}
                        />
                    </div>
                </>
            )
        }
        return(
            <>
                {repo}
            </>
        )
    };
};

const mapStateToProps = state => {
    return {
        repo: state.repos.singleRepo,
        repoId: state.repos.singleRepoId,
        error: state.repos.error,
        userId: state.users.userId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchSingleRepo: (id) => dispatch(actions.fetchSingleRepo(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleRepo);