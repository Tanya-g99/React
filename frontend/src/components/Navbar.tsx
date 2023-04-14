import React from "react";
import { NavLink } from "react-router-dom";
import "../scss/navbar.scss";

type NavbarProps = {
  isLogged: Boolean;
  openModal: () => void;
  search: () => void;
};

export const Navbar: React.FC<NavbarProps> = ({ isLogged, openModal, search }) => {
  
  return (
    <nav className="bg-gray-400 navbar navbar-light justify-content-between py-2">
      <p className="navbar-brand ms-4 mb-0 p-0 border border-2">
        <img src="logo1.png" alt="logo" className="d-inline-block navbar__logo " />
        <span className="h3 text-green align-bottom mx-1">App</span>
      </p>
      <div className="d-flex ms-auto pt-2">
        {isLogged && (
          <p className="me-3 my-auto" onClick={openModal}>
            <img src="add2.svg" alt="addMoment" className="d-inline-block" />
          </p>
        )}

        <NavLink to="/" className="mx-3 my-auto">
          <img src="feed.svg" alt="feedMoments" className="d-inline-block" />
        </NavLink>

        <NavLink to="/notifications" className="mx-3 my-auto">
          <img src="heart.svg" alt="heart" className="d-inline-block" />
        </NavLink>
        <NavLink to={isLogged ? "/profile" : "/login"} className="ms-3 me-4 pe-2 my-auto">
          <img src="profile.svg" alt="profile" className="d-inline-block" />
        </NavLink>
      </div>
      <div className="navbar">
        <form className="d-inline-block d-flex border border-2 rounded-start p-1 ps-0 mx-4 navbar__search">
          <input
            className="form-control mx-1"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-search text-green text-green__hover"
            viewBox="0 0 16 16"
            onClick={search}
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </form>
      </div>
    </nav>
  );
};
