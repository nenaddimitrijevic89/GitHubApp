import React from 'react';
import './Header.scss';
import logo from '../../../images/logo.png'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ isMain, resetId }) => {
    return(
        <div className='header'>
            {isMain
            ?<div className='center'>
                <img className='logo' src={logo} alt='logo' />
            </div>
            :<div className='center'>
                <Link to='/' className='link' onClick={() => resetId()}><i className='fa fa-arrow-left back'></i></Link>
            </div>
            }    
        </div>
    )
}

Header.propTypes = {
    isMain: PropTypes.bool.isRequired,
    resetId: PropTypes.func.isRequired
}

export { Header };