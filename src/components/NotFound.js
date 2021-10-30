import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function NotFound() {
  return (
    <NotFoundComp>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="error-template">
              <h1>Oops!</h1>
              <h2>Error 404, Not Found</h2>
              <div className="error-details">
                Sorry, we couldn't find the requested page.
              </div>
              <div className="error-actions">
                <Link
                  to="/"
                  type="button"
                  className="btn btn-outline-primary btn-lg mt-5"
                >
                  <i class="fas fa-home"></i>Back to home page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NotFoundComp>
  );
}

export default NotFound;

const NotFoundComp = styled.div`
  .error-template {
    padding: 40px 15px;
    text-align: center;
  }
  .error-details {
    margin-bottom: 15px;
  }

  .error-actions {
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;
