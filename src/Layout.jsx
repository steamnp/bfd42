import React from "react";
import topCard from "./assets/topCard.svg";
import './Layout.css'
import './global.css'

export default function Layout() {
  return (
    <div className="layout">
      <div className="card">
        <div className="top">
          <img className="img" src={topCard} alt="" />
          <button className="btn"> Learning </button>
          <p className='date'>Published 21 Dec 2023 </p>
        </div>
        <div className="bottom">
            <h2 className="heading">HTML & CSS foundations</h2>
            <p className = 'para'> These languages are the backbone of every 
            <br/>website, defining structure, content, and 
            <br/>presentation.
            </p>
            <footer className = 'cardfooter'>
                <img className='avatar' src='./assets/avatar.jpg' alt='avatar'/>
                <p className ="personname">Greg Hooper</p>
            </footer>

        </div>
      </div>
    </div>
  );
}
