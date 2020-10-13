import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';

export default function Tools() {
  return (
    <div className='tools'>
      <div className='title'>
        <p>Tools</p>
        <p>of</p>
        <p>Creation</p>
      </div>
      <div className='tool-icon'>
        <FontAwesomeIcon className='icon' icon={faTools} />
      </div>
      <div className='nep'>
        <p>Node.js</p>
        <p>Express</p>
        <p>PostgreSql</p>
      </div>
      <div className='rrl'>
        <p>React</p>
        <p>Redux</p>
        <p>Less/Sass</p>
      </div>
    </div>
  )
}
