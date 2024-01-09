import React, { useState } from "react";

const signIn = () => {
  const [popupStyle, showPopup] = useState("hide");
  const popup = () => {
    showPopup("signin-popup");
    setTimeout(() => showPopup("hide"), 3000);
  };
  return (
    <div className="cover">
      <h1>SignIn</h1>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <div className="signin-btn" onClick={popup}>
        Sign In
      </div>
    </div>
  );
};
export default signIn;
