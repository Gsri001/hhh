import React, { useState } from "react";
import "./body.css";
import All from "./All";
import Mark50 from"./mark50";
import Above50 from "./above50";
 import Good from"./good";

const Body = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (event) => {
    setToggleState(parseInt(event.target.value));
  };

  return (
    <div className="cot"> 
        <div className="radio-select-container">
          <h1>Students mark</h1>
          <label className="tab-label">
            <input type="radio"value={1}  checked={toggleState === 1} onChange={toggleTab} />
           ALL
          </label>
          <label className="tab-label">
            <input type="radio" value={2} checked={toggleState === 2} onChange={toggleTab} />
           1-50
          </label>
          <label className="tab-label">
            <input type="radio" value={3} checked={toggleState === 3} onChange={toggleTab}  />
            51-75
          </label>
          <label className="tab-label">
            <input type="radio" value={4} checked={toggleState === 4}  onChange={toggleTab} />
            76-100
          </label> 
      </div>

      <div className="conten-tab">
        <div className={toggleState === 1 ? "conten activecontent" : "cont"}>  
          <All/>
        </div>
        <div className={toggleState === 2 ? "conten activecontent" : "cont"}>
          <Mark50/>
        </div>
        <div className={toggleState === 3 ? "conten activecontent" : "cont"}>
        <Above50/>
        </div>
        <div className={toggleState === 4 ? "conten activecontent" : "cont"}>
          <Good/>
        </div>
      </div>
    </div>
  );
};

export default Body;
