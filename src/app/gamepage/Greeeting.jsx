"use client";

import "./style.css"; 
import bg1 from "./bg1.png"; 
import React, { useState } from 'react';

const Greeting = () => {
  const [greeting, setGreeting] = useState();
  const [bg1, setbg1] = useState();

  const changeGreeting = () => {
  };

  return (
    
    <div>
      
      <div className="navbar">
        <div className="left">
          <img src={bg1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Greeting;