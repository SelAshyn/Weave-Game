"use client"; // not server component  

import React, { useState } from 'react';

const Greeting = () => {
  const [greeting, setGreeting] = useState('Hello, World!');

  const changeGreeting = () => {
    setGreeting('Welcome to React!');
  };

  return (
    <div>
      <h1>{greeting}</h1>
      <button onClick={changeGreeting}>Change Greeting</button>
    </div>
  );
};

export default Greeting;