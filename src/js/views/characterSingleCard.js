import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const CharacterSingleCard = () => {
  const [dataDetails, setDataDetails] = useState();
  const location = useLocation();

  const { index } = location.state;

  useEffect(() => {
    getData();
  }, [location.state]);

  const getData = () => {
    const { url } = location.state;
    try {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setDataDetails(data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="center-container">
      {dataDetails === undefined ? (
        "Charging data..."
      ) : (
        <div>
          <div className="card big">
            <img
              className="card-img-top"
              src={`https://starwars-visualguide.com/assets/img/characters/${
                index + 1
              }.jpg`}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{dataDetails.name}</h5>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <div className="d-flex justify-content-between align-items-center bg-light">
                <div className="ms-2">
                  <p>Name: {dataDetails.name}</p>
                </div>
                <div className="ms-2">
                  <p>Birth year: {dataDetails.birth_year}</p>
                </div>
                <div className="ms-2">
                  <p>Gender: {dataDetails.gender}</p>
                </div>
                <div className="ms-2">
                  <p>Height: {dataDetails.height}</p>
                </div>
                <div className="ms-2">
                  <p>Skin color: {dataDetails.skin_color}</p>
                </div>
                <div className="ms-2">
                  <p>Eye color: {dataDetails.eye_color}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
