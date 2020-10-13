import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLinkedin,
  faTwitterSquare,
  faGithubSquare,
  faFacebookSquare 
} from '@fortawesome/free-brands-svg-icons';

import Profile from '../img/profile.png';

export default function Intro() {
  return (
    <div className='intro'>
      <div className='name-container'>
        <p className='header-name'>I am Stephen Gary</p>
        <p className='header-title'>Web Developer</p>
      </div>
      <div className='intro-container'>
        <div className='intro-left'>
          <img className='profile-pic' src={Profile} alt='stephen gary eyebrow raised. goofy, funny. ' />
        </div>
        <div className='intro-right'>
          <p className='japanese-text'>こんにちは</p>
          <p className='translation-text'>Kon'nichiwa!</p>
          <p className='statement'>
            I’ve always had a penchant for solving puzzles and problems, I'm a tireless seeker of knowledge, 
            an occasional purveyor of wisdom and as luck would have it I'm available for hire.    
          </p>
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
            <a href='https://m.facebook.com/stephen.gary.566'> 
              <FontAwesomeIcon className='cv-icon' icon={faFacebookSquare} />
            </a> 
          </div>
        </div>
      </div>
    </div>
  )
}
