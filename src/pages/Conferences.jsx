import React from "react";
import { Link } from "react-router-dom";
import { conference } from "../data/estructura-conf-tech";

export function Conferences(props) {
  function handleImageError(e) {
    e.target.src = "https://picsum.photos/400";
  }

  function renderConferences() {
    return conference.map((cf) => (
      <>
        <div
          className="card m-2"
          style={{ minWidth: "18rem", maxWidth: "25rem" }}
        >
          <div className="card-header bg-primary">
            <strong>{cf.tag}</strong>
          </div>
          <div className="card-body">
            <h5 className="card-title">{cf.title}</h5>
            <p className="card-text">{cf.description}</p>
            <div class="card-footer">
              Fecha:
              <span className="text-muted p-2">
                {new Date(cf.datetime * 1000).toGMTString()}
              </span>
            </div>
            <div class="card-footer">
              Orador:
              <Link to={"/speaker/" + cf.speaker}>
                <span className="p-2 text-primary">{cf.speaker}</span>
              </Link>
            </div>
          </div>
        </div>
      </>
    ));
  }

  return (
    <div className="container pt-4">
      <h1 className="text-center">Conferencias</h1>
      <div className="container p-2 ">
        <div className="row d-flex justify-content-center">
          {renderConferences()}
        </div>
      </div>
    </div>
  );
}
