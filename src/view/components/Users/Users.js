import React from 'react';
import { connect } from 'react-redux';

import { User } from './User/User';
import { userService } from '../../../services/userService';
import './Users.scss';
import { Search } from '../Search/Search';
import { Loader } from '../Loader/Loader';
import { Header } from '../Header/Header';
import { storageService } from '../../../services/storageService';
import { ErrorMsg } from '../ErrorMsg/ErrorMsg';
import * as actions from '../../../store/actions/actions';

class Users extends React.Component{
        state = {
            searchedUser: '',
            isLoading: true,
        }

    componentDidMount(){
        // const oldUsers=storageService.get('users')
        this.props.onInitUsers()
    }

    insert = (name) => {
        this.setState({ searchedUser: name })
    }

    search = () => {
        this.setState({ isLoading: true })
        
        userService.searchUsers(this.state.searchedUser)
        .then(response => {
            this.setState({ users: response })
            storageService.set('users', this.state.users)
        })
        .catch(() => this.setState({ hasError: true }))
        .finally(() => this.setState({ isLoading: false }))
    }

    render(){

        let users = this.props.error ? <ErrorMsg /> : <Loader />;

        if(this.props.users){
            users = (
                <>
                    <Header isMain={true}/>
                    <Search insert={this.insert} search={this.search} />
                    <div className='container'>
                        {this.props.users.map(user => 
                            <User
                                avatar={user.avatar}
                                name={user.name}
                                key={user.id}
                                isDetailed={false}
                                fullName={''}
                                bio={''}
                            />
                        )}
                    </div>
                </>
            )
        }
        return(
            <>
                {users}
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
      users: state.users,
      error: state.error
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      onInitUsers: () => dispatch(actions.initUsers())
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Users);