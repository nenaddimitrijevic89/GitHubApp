import React from 'react';
import './Repo.scss';
import PropTypes from 'prop-types';
import { BasicRepo } from './BasicRepo/BasicRepo';
import { DetailedRepo } from './DetailedRepo/DetailedRepo';

const Repo = ({ isDetailed, name, description, created, stargazers, watchers, forks, license, userName, setRepoId }) => {
    return(
        <>
        {isDetailed

        ?<DetailedRepo
            name={name}
            description={description}
            created={created}
            stargazers={stargazers}
            watchers={watchers}
            forks={forks}
            license={license}
        />

        :<BasicRepo 
            userName={userName}
            name={name}
            description={description}
            created={created}
            setRepoId={setRepoId}
        />
        }
        </>
    )
}

Repo.propTypes = {
    userName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    stargazers: PropTypes.number.isRequired,
    watchers: PropTypes.number.isRequired,
    forks: PropTypes.number.isRequired,
    license: PropTypes.string.isRequired
}

export { Repo };