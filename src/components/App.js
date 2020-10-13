import React from 'react';

import Intro from './Intro';
import Skills from './Skills';
import Edu from './Edu';
import Heading from './Heading';

export default function App() {
  return (
    <div className='app'>
      <div className='bg-center'>
        <Heading />
        <Intro />
        <Skills />
        <Edu />
      </div>
    </div>
  );
}