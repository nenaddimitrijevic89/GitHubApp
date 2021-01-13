import React from 'react';
import '../Repo.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BasicRepo = ({ userName, name, description, created }) => {
    return(
        <Link to={`/repositories/${userName}/${name}`} target='_blank' className='link'>
            <div className='cardRepo'>
                <h1 className='nameRepo'>{name}</h1>
                <h4 className='descrRepo'>{description}</h4>
                <div className='infoRepo'>
                    <h4><i className='fa fa-calendar'></i> {created}</h4>
                </div>
            </div>
        </Link>
    )
}

BasicRepo.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired
}

export { BasicRepo };