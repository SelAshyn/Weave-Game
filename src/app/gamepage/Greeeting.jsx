"use client";

import "./style.css"; 
import bg1 from "./bg1.png"; 
import React, { useState } from 'react';

const Greeting = () => {

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
          <div className="img">
            <img src="https://raw.githubusercontent.com/SelAshyn/Weave-Game/refs/heads/Game-Page/src/app/gamepage/i1.png" alt="" />
            <img src="https://raw.githubusercontent.com/SelAshyn/Weave-Game/refs/heads/Game-Page/src/app/gamepage/i2.png" alt="" />
            <img src="https://raw.githubusercontent.com/SelAshyn/Weave-Game/refs/heads/Game-Page/src/app/gamepage/i4.png" alt="" className="img2"/>
          </div>
        </div>
      </div>
      <div class="Main">
        <div className="timer">
          <div className="text">
            <h1 className="font-AtomicAge">00:00</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greeting;