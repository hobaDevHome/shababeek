import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterContianer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/* column 1 */}
            <div className="col-md-4 col-sm-6">
              <h5>Branches</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#"> Head Office</a>
                </li>
                <li>
                  <a href="#"> Cairo Office</a>
                </li>
                <li>
                  <a href="#"> Banha Office</a>
                </li>
                <li>
                  <a href="#"> Menoof Office</a>
                </li>
              </ul>
            </div>
            {/* column 1 end */}

            {/* column 1 */}
            <div className="col-md-4 col-sm-6">
              <h5>Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#"> Terms and Conditions</a>
                </li>
                <li>
                  <a href="#"> FAQ's</a>
                </li>
                <li>
                  <a href="#"> Contract Sample</a>
                </li>
              </ul>
            </div>
            {/* column 1 end */}

            {/* column 1 */}
            <div className="col-md-4 col-sm-6">
              <h5>About Shababeek</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#"> Our sotry</a>
                </li>
                <li>
                  <a href="#"> Gallery</a>
                </li>
                <li>
                  <a href="#"> Clients</a>
                </li>
              </ul>
            </div>
            {/* column 1 end */}
          </div>
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} Shababeek Web Site - All rights
              reserved2
            </p>
          </div>
        </div>
      </div>
    </FooterContianer>
  );
}

const FooterContianer = styled.footer`
  .footer-middle {
    background-color: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
  }
  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }
  ul li a {
    color: var(--mainGray);
    text-decoration: none;
  }

  ul li a:hover {
    color: var(--mainLightGray);
  }
`;
export default Footer;
