"use client";

import "./style.css"; 
import bg1 from "./bg1.png"; 
import React, { useState } from 'react';

const Greeting = () => {
  const [greeting, setGreeting] = useState();
  const changeGreeting = () => {
  };

  return (
    
    <div>
      
      <div className="navbar">
        <div className="left">
          <img src="https://raw.githubusercontent.com/SelAshyn/Weave-Game/refs/heads/Game-Page/src/app/gamepage/bg1.png" alt="" />
        </div>
        <div className="mid">
          <img src="https://raw.githubusercontent.com/SelAshyn/Weave-Game/refs/heads/Game-Page/src/app/gamepage/bg2.png" alt="" />
        </div>
        <div className="rightb">
          <button type="button">VIEW PANAROMA</button>
          <br />
          <img src="https://raw.githubusercontent.com/SelAshyn/Weave-Game/refs/heads/Game-Page/src/app/gamepage/i1.png" alt="" />
        </div>
      </div>
      <div class="Main">
      </div>
    </div>
  );
};

export default Greeting;