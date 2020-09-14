import React from 'react';
import PropTypes from 'prop-types';
import '../User.scss';

const DetailedUser = ({ avatar, name, bio, fullName }) =>{
    return(
        <div className='card'>
            <img className='cardImage' src={avatar} alt='profileImage'/>
            <h3 className='darkName'>{name.slice(0, 18)}</h3>
            <h4 className='cardInfo'><i className='fa fa-user'></i> {fullName}</h4>
            <h4 className='cardInfo'><i className="fa fa-info-circle"></i> {bio}</h4>
        </div>
    )
}

DetailedUser.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired
}

export { DetailedUser };