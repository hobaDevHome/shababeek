import React from 'react';

import logo2 from '../images/logo3.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  fixed-top navbar-light bg-dark">
      <div className="container-fluid">
        <StyledLogo>
          <Link className="navbar-brand" to="/">
            <img src={logo2} alt="shababeek" />
          </Link>
        </StyledLogo>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <i class="fas fa-bars" style={{ color: 'white' }}></i>
          </span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0 ">
            <li className="nav-item ">
              <Link
                className="nav-link active text-white text-uppercase ms-5 "
                aria-current="page"
                to="/"
              >
                Home&nbsp;<i className="fas fa-home"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white text-uppercase ms-5"
                to="/gallery"
              >
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white text-uppercase ms-5"
                to="/contact"
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

const StyledLogo = styled.div`
@media (max-width: 760px) {
 img{
   width: 120px;
 }
`;

export default Navbar;
