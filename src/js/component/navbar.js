import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-expand-lg bg-light.bg-gradient">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="https://blenderartists.org/uploads/default/original/3X/4/5/45e1f3488099a3549c74065996eb61ebe8f63b97.jpg"
            alt=""
            width="125"
            height="55"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle btn btn-primary text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Favorites <i className="fa fa-heart text-warning" />
              </a>
              <ul className="dropdown-menu">
				{store.favorites.map((item, index) => (
					
                <li>
                  <a className="dropdown-item" href="#">
                    {item}
                  </a>   
				  onClick={() => {
                    actions.deleteFavorites(index);
                  }}             
              </li>
            ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
