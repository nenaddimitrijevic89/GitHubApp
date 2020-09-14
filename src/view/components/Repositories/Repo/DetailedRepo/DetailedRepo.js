import React from 'react';
import '../Repo.scss';
import PropTypes from 'prop-types';

const DetailedRepo = ({ name, description, created, stargazers, watchers, forks, license }) =>{
    return(
        <div className='cardRepo height'>
            <h1 className='nameRepo'>{name}</h1>
            <h4 className='descrRepo'>{description}</h4>
            <div className='infoRepo'>
                <h4><i className='fa fa-calendar'></i> {created}</h4>
                <h4><i className='fa fa-star'></i> {stargazers}</h4>
                <h4><i className='fa fa-eye'></i> {watchers}</h4>
                <h4><i className='fa fa-code-fork'></i> {forks}</h4>
                <h4>{license}</h4>
            </div>
        </div>
    )
}

DetailedRepo.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    stargazers: PropTypes.number.isRequired,
    watchers: PropTypes.number.isRequired,
    forks: PropTypes.number.isRequired,
    license: PropTypes.string.isRequired
}

export { DetailedRepo };