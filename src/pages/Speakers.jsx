import React from "react";
import { Link } from "react-router-dom";

import { speaker } from "../data/estructura-conf-tech";

export function Speakers(props) {
  function handleImageError(e) {
    e.target.src = "https://picsum.photos/400";
  }
  function renderSpeakers() {
    return speaker.map((sp) => (
      <div className="card m-2 shadow" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={sp.image}
          onError={handleImageError}
          alt="Card cap"
        />
        <div className="card-body">
          <h5 className="card-title">
            {sp.name}
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href={"https://twitter.com/" + sp.twitter}
            >
              <span className=" p-2 text-muted">@{sp.twitter}</span>
            </a>
          </h5>
          <p className="card-text">
            {sp.biography.length > 150
              ? sp.biography.slice(0, 150) + "..."
              : sp.biography}
          </p>
          <Link to={"/speaker/" + sp.name}>
            <a href="#" className="btn btn-primary">
              Ver más
            </a>
          </Link>
        </div>
      </div>
    ));
  }

  return (
    <div className="container pt-4">
      <h1 className="text-center">Oradores</h1>
      <div className="container p-2 ">
        <div className="row d-flex justify-content-center">
          {renderSpeakers()}
        </div>
      </div>
    </div>
  );
}
