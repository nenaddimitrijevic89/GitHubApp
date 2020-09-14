import React from 'react';
import './ErrorMsg.scss';

const ErrorMsg = () => {

        return (
          <div className='containerError'>
            <h2>Something went wrong. Try again later <span role='img' aria-label="smile">&#x1F610;</span></h2>
          </div>
        )
  }

  export { ErrorMsg };