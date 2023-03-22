import React from "react";
import CreatAccount from "./Create";

export default function Login() {
  return (
    <div className="formpage">

      <div className="form1">

        <form>
          
          <div className="inputbox">
            <input placeholder="Email Address" />
            <input placeholder="Password" />
            <div></div>
          </div>

         

          <div className="btnbox">
            <button>LOGIN</button>
            <p>Forgot Password ?</p>
          </div>
          
       
        

        </form>

      </div>

      <div className="form2"><CreatAccount/></div>
    </div>
  );
}
