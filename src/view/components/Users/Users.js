import React from 'react';
import { connect } from 'react-redux';

import { User } from './User/User';
import './Users.scss';
import { Search } from '../Search/Search';
import { Loader } from '../Loader/Loader';
import { Header } from '../Header/Header';
import { ErrorMsg } from '../ErrorMsg/ErrorMsg';
import * as actions from '../../../store/actions/users';

class Users extends React.Component{
        state = {
            searchedUser: ''
        }

    componentDidMount(){
        this.props.onInitUsers()
    }

    insert = (name) => {
        this.setState({ searchedUser: name })
    }

    search = () => {
        this.props.onSearchUsers(this.state.searchedUser)
    }

    render(){

        let users = this.props.error ? <ErrorMsg /> : <Loader />;

        if(this.props.users){
            if(this.props.users.length === 0){
                users = <ErrorMsg />
            }else {
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
                                    setId={this.props.onSetUserId}
                                />
                            )}
                        </div>
                    </>
            )}
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
      users: state.users.users,
      error: state.users.error
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      onInitUsers: () => dispatch(actions.initUsers()),
      onSearchUsers: (name) => dispatch(actions.searchUsers(name)),
      onSetUserId: (id) => dispatch(actions.setUserId(id))
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Users);