"use client";  

import React, { useState } from 'react';
import Greeting from './gamepage/Greeting';

export default function Page() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      {showLogin ? (
        <Greeting />
      ) : (
        <div>
          <h1>Main Page Content</h1>  {/* just  a pseudo main page component , clicking the button below shows the data of Greetings.jsx  */}
          <button onClick={() => setShowLogin(true)}>Go to Login</button>
        </div>
      )}
    </div>
  );