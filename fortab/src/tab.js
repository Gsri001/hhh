import React, { useState } from "react";
import "./App.css";
import Params from "./params";
import Body from "./body";

const Tabs=()=> {
  const [toggleState, setToggleState] = useState(4);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)} > 
           Params
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}    onClick={() => toggleTab(2)} > 
          Auth
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}  onClick={() => toggleTab(3)}>
             Headers
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}   onClick={() => toggleTab(4)} >
          Body
        </button>
        <button
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}  onClick={() => toggleTab(5)} >
            Pre-Request
        </button>
        <button
          className={toggleState === 6 ? "tabs active-tabs" : "tabs"}  onClick={() => toggleTab(6)}>
         Settings
        </button>
      </div>

      <div className="content-tabs">
           <div className={toggleState === 1 ? "content active-content" : "content"}  >
          <Params />
            </div>
             <div className={toggleState === 2 ? "content active-content" : "content"}>
              <h2>Auth</h2>
               <table className="auth-table">
                   <tr>
                <td className="content-auth-labe">Username:</td>
                <td  className="content-auth-labe"> <input type="text" /></td>
              </tr>
              <tr>
                <td className="content-auth-labe">Password:</td>
                <td  className="content-auth-labe"> <input type="password" /></td>
              </tr>
          </table>
        </div>
        <div
          className={toggleState === 3 ? "content active-content" : "content"} >
          <h2>Headers</h2> 
           <p>
             <label className="content-auth-la">Content-Type:</label>
             <input type="text"  />
             <label className="content-auth-la">Authorization: </label>
             <input type="text" />
           </p>
        </div>
        <div
          className={toggleState === 4? "content active-content" : "content"}  >
          <Body/>
        </div>
        <div
          className={toggleState === 5 ? "content active-content" : "content"} >
          <h2>Pre-Request</h2>  
          <p>Pre-requestest is used here for the purose of pre-requesting the thing which is to be used for pre requesting </p>
        </div>
        <div
          className={toggleState === 6 ? "content active-content" : "content"} >
          <h2>Settings</h2>   
          <p>Setting is used here for setting purpose in the Postman request </p>    
        </div>
      </div>
    </div>
  );
}

export default Tabs;
