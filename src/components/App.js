import React from 'react';
import Intro from './Intro';
import Tools from './Tools';

export default function App() {
  return (
    <div className='app'>
      <div className='bg-center'>
        <Intro />
        <Tools />
      </div>
    </div>
  );
}