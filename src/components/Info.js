import React from 'react';
import { Link } from 'react-router-dom';

function Info({ item }) {
  const { id, headerTitle, headerSubTitle, description, img } = item;

  return (
    <div className="col-md-auto">
      <div
        className="card h-100"
        style={{
          width: '18rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div className="main">
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{headerTitle}</h5>
            <h6 className="card-title">{headerSubTitle}</h6>
            <p className="card-text">{description}</p>
          </div>
        </div>
        <div className="butt">
          <Link
            to={`/detials/${id}`}
            className="btn btn-outline-success ms-1 mb-1"
          >
            show details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Info;
