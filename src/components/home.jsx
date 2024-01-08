import React from "react";
import sytles from "./home.module.css";



export default function Home() {
  return (
    <div classname={sytles.layout}>
    <div classname={sytles.container}>
    <form className={sytles.form}>
      <div >
        <img className={sytles.img} src='src/assets/authentication.png'/>

   
        <div  className={sytles.inputemail}>
          <label htmlFor="email">Email:</label>
          <input
           
            type="text"
            id="email"
            name="email"
          />
        </div>
        <div className={sytles.inputpassword}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
          />
        </div>
        <div className = {sytles.greenbtn} type='button'> Sign In</div>
      </div>
      
    </form>
    </div>
    </div>
  );
}
