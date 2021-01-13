import React from 'react';
import '../User.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BasicUser = ({ name, avatar, setId }) =>{
    return(
        <Link to={`/repositories/${name}`} className='link' onClick={() => setId(name)}>
            <div className='card'>
                <img className='cardImage' src={avatar} alt='profileImage'/>
                <h3 className='name'>{name.slice(0, 18)}</h3>
            </div>
        </Link>
    )
}

BasicUser.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export { BasicUser };