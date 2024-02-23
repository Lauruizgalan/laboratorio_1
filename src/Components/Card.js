import React from "react";
import "./Card.css";

function Card({ title, imageUrl, body, props}) {
  return (
    <div className="general">
        <div className="card-container">
      <div className="image-container">
        <img src={imageUrl} alt="Foto desarrollador" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h1>{title}</h1>
        </div>
        <div className="card-body">
          <p>{body}</p>
        </div>
      </div>

      <div className="btn">
        <button onClick={() => window.open(props.linkedin, "_blank")}>
          Seguir en LinkedIn
        </button>
        <button onClick={() => window.open(props.youtube, "_blank")}>
          Seguir en YouTube
        </button>
        <button onClick={() => window.open(props.twitter, "_blank")}>
          Seguir en Twitter
        </button>
      </div>
    </div>
    </div>
  );
}

export default Card;
