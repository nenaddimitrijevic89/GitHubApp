import React from 'react';
import './User.scss';
import PropTypes from 'prop-types';
import { BasicUser } from './BasicUser/BasicUser';
import { DetailedUser } from './DetailedUser/DetailedUser';

const User = ({ avatar,name, bio, fullName, isDetailed }) => {
    return(
        <>
            {isDetailed

            ?<DetailedUser 
                avatar={avatar}
                name={name}
                fullName={fullName}
                bio={bio}
            />

            :<BasicUser 
                name={name}
                avatar={avatar}
            />
            }
        </>
    )
}

User.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    isDetailed: PropTypes.bool.isRequired
}

export { User }