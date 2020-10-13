import React from 'react'

import Tool from '../img/tools.png';

export default function Tools() {
  return (
    <div className='tools'>
      <div className='title'>
        <p>Tools</p>
        <p>of</p>
        <p>Creation</p>
      </div>
      <div className='tool-img'>
        <img className='img' src={Tool} alt='wrench and screwdriver crossed' />
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
