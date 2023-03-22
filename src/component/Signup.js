import React from "react";
import CreatAccount from "./Create";

export default function Signup() {
  return (
    <div className="formpage">
      <div className="form1">
        <form>
          <div className="inputbox">

          <input placeholder="Enter Name" />
            <input placeholder="Email Address" />
            <input placeholder="Password" />
            
          </div>

          <div className="btnbox">
            <button>SIGNUP</button>
           
          </div>
        </form>
      </div>
      
      <div className="form2"><CreatAccount/></div>
    </div>
  );
}
