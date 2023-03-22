import React, { useState } from "react";

import "./App.css";
import Login from "./component/Login";
import Signup from "./component/Signup";

function App() {
  let btn = {
    width: "40%",
    display: "flex",
    justifyContent: "center",
    padding: "0.4rem",
    cursor: "pointer",
  };


  // let active = {
  //   font: "normal normal bold 16px/17px Roboto",
  //   letterSpacing: "0px",
  //   color: "#1D2226",
  //   opacity: "1",
  //   textDecoration: "none",
  //   borderBottom: "4px solid #E70B89",
  // };
  // let unactive = {
  //   font: "normal normal normal 16px/17px Roboto",
  //   letterSpacing: "0px",
  //   color: "#1D2226",
  //   opacity: "1",
  //   textDecoration: "none",
  // };

  let [toggle, setToggle] = useState(true);
  console.log(toggle);

  return (
    <div className="App">
      <div className="container">
        <div className="box1">
          <div className="logo"></div>
        </div>

        <div className="box2">
          <div className="textbox">
          SOME RANDOM TEXT, SOME RANDOM TEXT,SOME RANDOM TEXT,SOME RANDOM TEXT
          </div>
        </div>

        <div className="box3">
          <div className="componentbar">
            <div className="btn">
              <div
                style={btn}
                onClick={() => setToggle(true)}
                className={toggle ? "active" : "unactive"}
              >
                Login
              </div>
              <div
                style={btn}
                onClick={() => setToggle((pre) => !pre)}
                className={toggle ? "unactive" : "active"}
              >
                Signup
              </div>
            </div>
          </div>

          <div className="component">
            {toggle && <Login />}

            {!toggle && <Signup />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
