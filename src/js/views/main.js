import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { CardCharacters } from "../component/cardCharacters.js";
import { CardVehicles } from "../component/cardVehicles";
import { CardPlanets } from "../component/cardPlanets";

export const Main = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.fetchData();
  }, [store]);

  return (
    <div className="container">
		<h3>Characters</h3>
      <div className="card-container">
        {store.characters.map((item, index) => {
          return (
            <div key={index} style={{ background: item.background }}>
              <CardCharacters name={item.name} gender={item.gender} hair_color={item.hair_color} eye_color={item.eye_color} url={item.url} index={index} />
            </div>
          );
        })}
      </div>
	  <br />
	  <h3>Planets</h3>
      <div className="card-container">
        {store.planets.map((item, index) => {
          return (
            <div key={index} style={{ background: item.background }}>
              <CardPlanets name={item.name} population ={item.population} terrain={item.terrain} url={item.url} index={index} />
            </div>
          );
        })}
      </div>
      <br />
	  <h3>Vehicles</h3>
      <div className="card-container">
        {store.vehicles.map((item, index) => {
          return (
			<div key={index} style={{ background: item.background }}>
			  <CardVehicles name={item.name} cargo_capacity={item.cargo_capacity} passengers={item.passengers} url={item.url} index={index} />
		  	</div>
          );
        })}
      </div>
    </div>
  );
};
