import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLinkedin,
  faTwitterSquare,
  faGithubSquare } from '@fortawesome/free-brands-svg-icons';

export default function Intro() {
  return (
    <div className='intro'>
      <div className='social-media-icons'>
        <a href='https://github.com/stgary'>
          <FontAwesomeIcon className='cv-icon' icon={faGithubSquare} />
        </a>
        <a href='https://www.linkedin.com/in/sgary0'>
          <FontAwesomeIcon className='cv-icon' icon={faLinkedin} />
        </a>
        <a href='https://twitter.com/explore'>
          <FontAwesomeIcon className='cv-icon' icon={faTwitterSquare} />
        </a>
      </div>
    </div>
  )
}
