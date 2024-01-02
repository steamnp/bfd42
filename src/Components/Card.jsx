import React from "react";
function Card({ title, imgUrl, body }) {
  return (
    <div className="card-container">
      <div className="img-container">
        <img src={imgUrl} alt="" />
      </div>
    </div>
  );
}

export default Card;
