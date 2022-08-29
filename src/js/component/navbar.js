import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from 'react-router-dom';

export const Navbar = () => {
  const history = useHistory();
  const { store, actions } = useContext(Context);

  const handleDelete = (element) => {
    actions.deleteFavorite(element);
  };

  const handleRedirection = (element) => {
    const { index, url } = element;
    switch(element.type){
      case 'characters':
        history.push("/characters", { index, url });
        break;
      case 'planets':
        history.push("/planets", { index, url }); 
        break;
      case 'vehicles':
        history.push("/vehicles", { index, url });
        break;
    };
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light.bg-gradient">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src="https://blenderartists.org/uploads/default/original/3X/4/5/45e1f3488099a3549c74065996eb61ebe8f63b97.jpg"
            alt=""
            width="125"
            height="55"
          />
        </a>
        <div className="dropdown">
        <button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Favorites</button>
         <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {
              store.favorites.map((element, index) => {
                return <div key={index} className="d-flex">
                  <a className="dropdown-item" onClick={() => handleRedirection(element)}>{element.name}</a>
                  <a className="dropdown-item" onClick={() => handleDelete(element)}><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="red" className="bi bi-x-lg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg></a>
                </div>
              })
            }
        </div>
        </div>
      </div>
    </nav>
  );
};
