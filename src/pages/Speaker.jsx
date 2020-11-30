import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { speaker as speakersData } from "../data/estructura-conf-tech";

export function Speaker(props) {
  const { name } = useParams();

  function getSpeakerData(name) {
    return speakersData.filter(
      (sp) => sp.name.toUpperCase() === name.toUpperCase()
    )[0];
  }

  function handleImageError(e) {
    e.target.src = "https://picsum.photos/400";
  }

  const speakerData = getSpeakerData(name);

  return (
    <>
      <div className="container mt-4">
        <div className="container pt-4 card shadow">
          <div className="card-header">
            <h5 className="card-title text-center">
              {speakerData.name}
              <a
                target="_blank"
                rel="nofollow noopener noreferrer"
                href={"https://twitter.com/" + speakerData.twitter}
              >
                <span className=" p-2 text-muted">@{speakerData.twitter}</span>
              </a>
            </h5>
          </div>
          <div className="row">
            <div className="col-md-5 col-sm-12">
              <img
                src={speakerData.image}
                onError={handleImageError}
                className="card-img-top"
                alt={speakerData.name}
              />
            </div>
            <div className="col-md-7 col-sm-12">
              <div className="card-body">
                <p className="card-text">
                  <small className="text-muted">
                    {speakerData.jobtitle}

                    {speakerData.workplace
                      ? " en " + speakerData.workplace
                      : ""}
                  </small>
                </p>
                <p className="card-text">{speakerData.biography}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
