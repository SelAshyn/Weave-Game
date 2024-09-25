"use client";  

import React, { useState } from 'react';
import Greeting from './gamepage/Greeeting.jsx';
import "./globals.css";
import bg1 from './gamepage/bg1.png';

export default function Page() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      {showLogin ? (
        <Greeting />
      ) : (
        <div>
          <h1>Main Page Content</h1>
          <button onClick={() => setShowLogin(true)}>Go to Login</button>
        </div>
      )}
    </div>
  );
}