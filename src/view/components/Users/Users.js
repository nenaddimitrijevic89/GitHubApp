import React from 'react';
import { User } from './User/User';
import { userService } from '../../../services/userService';
import './Users.scss';
import { Search } from '../Search/Search';
import { Loader } from '../Loader/Loader';
import { Header } from '../Header/Header';
import { storageService } from '../../../services/storageService';
import { ErrorMsg } from '../ErrorMsg/ErrorMsg';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';

class Users extends React.Component{
    constructor(props){
        super(props)
        this.state={
            users: [],
            searchedUser: '',
            isLoading: true,
            hasError: false
        }
    }

    componentDidMount(){
        const oldUsers=storageService.get('users')
        
        if(oldUsers){
            this.setState({ users: oldUsers, isLoading: false })
        } else{
            userService.getUsers()
            .then(response => this.setState({ users: response }))
            .catch(() => this.setState({ hasError: true }))
            .finally(() => this.setState({ isLoading: false }))
        }
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
        if(this.state.isLoading){
            return <Loader />
        }
        return(
            <>
                {this.state.hasError

                ?<ErrorMsg />
                
                :<>
                    <Header isMain={true}/>
                    <Search insert={this.insert} search={this.search} />
                    <ErrorBoundary>
                    <div className='container'>
                        {this.state.users.map(user => 
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
                    </ErrorBoundary>
                </>
                }  
            </>
        )
    }
}

export { Users }