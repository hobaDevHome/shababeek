import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from './context';
import ReviewCard from './ReviewCard';

function Gallery() {
  const { reviewsData } = useGlobalContext();

  return (
    <div className="container">
      <div className="row justify-content-center my-5">
        <h3 className="mt-5 text-center">Shababeek Show room</h3>
        <div class="col-md-8">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="5"
                aria-label="Slide 6"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="6"
                aria-label="Slide 7"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="7"
                aria-label="Slide 8"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="8"
                aria-label="Slide 9"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="9"
                aria-label="Slide 10"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src=".././images/01.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src=".././images/02.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src=".././images/03.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src=".././images/04.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src=".././images/10.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src=".././images/05.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src=".././images/06.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src=".././images/07.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src=".././images/08.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src=".././images/09.jpg" class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      <ReviewsMain>
        <h3 className="mt-5 text-center">Our clinets reviews</h3>
        {reviewsData.map((review) => {
          return <ReviewCard review={review} />;
        })}
      </ReviewsMain>
    </div>
  );
}

const ReviewsMain = styled.div`
  width: 80%;
  margin: 0 auto;
  border: 1px solid var(--mainGray);

  padding-top: 0;
  padding-left: 20px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const carImgDiv = styled.div`
  width: 90%;
  margin: 0 auto;

  padding-top: 0;
  padding-left: 20px;
  border-radius: 5px;
  margin-bottom: 10px;
`;
export default Gallery;
