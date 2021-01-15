import React from 'react';
import './Header.scss';
import logo from '../../../images/logo.png'
import PropTypes from 'prop-types';

const Header = ({ isMain, resetId }) => {
    return(
        <div className='header'>
            {isMain
            ?<div className='center'>
                <img className='logo' src={logo} alt='logo' />
            </div>
            :<div className='center'>
                <div className='link' onClick={() => { resetId(); window.history.back();}}>
                    <i className='fa fa-arrow-left back'></i>
                </div>
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