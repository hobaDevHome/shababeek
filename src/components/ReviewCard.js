import React from 'react';
import styled from 'styled-components';

function ReviewCard({ review }) {
  const { id, name, avatar, comment } = review;
  console.log(avatar);

  return (
    <div className="media mt-5">
      <img
        src={avatar}
        alt="review"
        className="mr-3"
        style={{ width: '40px' }}
      />
      <div className=" media-body">
        <h5 className="mt-0">{name}</h5>
        <p>{comment}</p>
      </div>
    </div>
  );
}

export default ReviewCard;
