import React from 'react'
import Profile from '../img/profile.png';

export default function Intro() {
  return (
    <div className='intro'>
      <div className='intro-container'>
        <div className='intro-left'>
          <img className='intro-img' src={Profile} alt='stephen gary eyebrow raised. goofy, funny. ' />
        </div>
        <div className='intro-right'>
          <p className='intro-heading'>こんにちは</p>
          <p className='intro-sub-heading'>Kon'nichiwa!</p>
          <p className='intro-para'>
            Full stack developer who's passionate about creating intuitive 
            simple solutions to complex problems. I've been tested in multiple 
            industries with distinct roles and I was consistently successful.
          </p>
          <p className='intro-para'>
            I'm a tireless seeker of knowledge, an occasional purveyor 
            of wisdom and as luck would have it I'm available for hire.    
          </p>
        </div>
      </div>
    </div>
  )
}
