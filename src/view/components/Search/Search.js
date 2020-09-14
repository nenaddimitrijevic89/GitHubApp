import React from 'react';
import PropTypes from 'prop-types';
import './Search.scss';

const Search = ({ insert, search }) => {

    const insertTerm=(event)=>{
        const name = event.target.value;
        insert(name)
    }

    return(
        <div className="search">
            <input 
                type="search"      
                className="searchTerm"
                placeholder="Who do you need?"
                onChange={event => insertTerm(event)}
                onKeyUp={event => event.keyCode === 13 && search()}
                />
            <button type="submit" className="searchButton" onClick={search}>
                <i className="fa fa-search"></i>
            </button>
        </div>
    )
}

Search.propTypes = {
    insert: PropTypes.func.isRequired,
    search: PropTypes.func.isRequired
}

export { Search };