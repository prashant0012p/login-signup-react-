import React from "react";

export default function CreatAccount() {
  return (
    <div className="createaccount">
      <div
        style={{
          textAlign: "center",
          font: "normal normal normal 12px/17px Roboto",
          letterSpacing: "0px",
          color: "#9D9D9D",
          opacity: "1",

        }}
      >
        or login with{" "}
      </div>

      <div className="imgbox">
        <div>
          <img
            src="https://img.freepik.com/free-icon/google_318-278809.jpg"
            alt="net slow"
          />
        </div>
        <div>
          <img
            src="https://cdn3.iconfinder.com/data/icons/3d-applications/512/app_icons_social_media___facebook_logo_social_network_media_online.png"
            alt="net slow"
          />
        </div>
        <div>
          <img
            src="https://www.freeiconspng.com/uploads/download-logo-twitter-blue-symbol-24.png"
            alt="net slow"
          />
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          font: "normal normal normal 12px/17px Roboto",
          letterSpacing: "0px",
          color: "#1A1A1A",
        }}
      >
        Don't have an account?{" "}
        <span
          style={{
            font: "normal normal normal 12px/17px Roboto",
            letterSpacing: "0px",
            color: "#E70B89",
            cursor:"pointer"
          }}
        >
          Create new now!
        </span>{" "}
      </div>

      <div
        style={{
          textAlign: "center",
          font: "normal normal normal 12px/17px Roboto",
          letterSpacing: "0px",
          color: "#1A1A1A",
          
        }}
      >
        By signing up, you are agree with our{" "}
        <span
          style={{
            font: "normal normal normal 12px/17px Roboto",
            letterSpacing: "0px",
            color: "#E70B89",
            textDecoration: "underline",
            cursor:"pointer"
          }}
        >
          Terms & Conditions
        </span>
      </div>
    </div>
  );
}
