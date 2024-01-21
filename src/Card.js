// Card.js

import React from "react";
import "./styles.css"; // Import the CSS file

function Card() {
  return (
    <div className="card">
      <img
        className="card-image"
        src="https://th.bing.com/th/id/R.0bd8c63b0d7de7a7044c4bc11c3cca07?rik=g%2b72MRx%2fWarptQ&riu=http%3a%2f%2fwww.car-brand-names.com%2fwp-content%2fuploads%2f2015%2f03%2fAudi-emblem.jpg&ehk=thn9olfHpKJ8vEVAS93S9ibFC%2fZ%2b53oJbPcoahh521w%3d&risl=&pid=ImgRaw&r=0"
        width={400}
        height={200}
        alt="Audi-logo"
      />

      <h2 className="card-title">
        <em>Audi</em>
      </h2>

      <p className="card-text">
        <em>Finally done with first one</em>{" "}
      </p>
    </div>
  );
}

export default Card;
