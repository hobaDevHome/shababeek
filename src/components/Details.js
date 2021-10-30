import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { useGlobalContext } from './context';

function Details() {
  const { id } = useParams();
  const { info } = useGlobalContext();
  const item = info.find((i) => i.id === +id);
  const { headerTitle, headerSubTitle, description, img } = item;
  return (
    <React.Fragment>
      <HeaderDetails className="container-fluid align-items-center">
        <h1 className="display-1 font-weight-bold"> {headerTitle} </h1>
        <h4 className="display-4"> {headerSubTitle} </h4>
        <p>{description}</p>
        <img src={img} />
        {/* social icons */}
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-2">
              <i class="fab fa-facebook"></i>
            </div>
            <div className="col-2">
              <i class="fab fa-twitter"></i>
            </div>
            <div className="col-2">
              <i class="fab fa-instagram"></i>
            </div>
            <div className="col-2">
              <i class="fab fa-whatsapp"></i>
            </div>
            <div className="col-2">
              <i class="fab fa-telegram-plane"></i>
            </div>
          </div>
        </div>
      </HeaderDetails>
    </React.Fragment>
  );
}

const HeaderDetails = styled.header`
  background: linear-gradient(rgba(109, 109, 109), rgba(255, 255, 255));

  text-align: center;
  color: var(--mainWhite);
  margin-bottom: 20px;

  h1 {
    padding-top: 10%;
    color: var(--mainDark);
  }

  h4 {
    color: var(--mainDark);
  }

  p {
    padding-left: 10%;
    padding-right: 10%;
    margin-bottom: 5%;
    color: var(--mainDark);
  }

  i {
    font-size: 2rem;
    color: var(--mainDark);
  }

  i:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }

  @media (max-width: 760px) {
    h1,
    h4 {
      color: var(--mainWhite);
    }
  }
`;
export default Details;
