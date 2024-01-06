import React from "react";
import sytles from "./home.module.css";

export default function Home() {
  return (
    <div classname={sytles.container}>
    <form className={sytles.form}>
      <div className={sytles.container}>
        <div  className={sytles.inputemail}>
          <label htmlFor="name">User Name:</label>
          <input
           
            type="text"
            id="username"
            name="name"
          />
        </div>
        <div className={sytles.inputpassword}>
          <label htmlFor="name">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
          />
        </div>
      </div>
    </form>
    </div>
  );
}
