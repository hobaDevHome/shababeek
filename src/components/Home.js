import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from './context';
import Info from './Info';
function Home() {
  const { info } = useGlobalContext();
  return (
    <>
      <Landing>
        <div className="landing">
          <div className="overlay">
            <div className="text">
              <div className="content">
                <h2>Shababeek...</h2>
                <h2>Your Window To Happiness.</h2>
              </div>
            </div>
          </div>
        </div>
      </Landing>
      <div className="container">
        <ProdutcsTitle>
          <div class="main-heading mt-5">
            <h2>Our Products</h2>
            <p>A wide range of windows for different uses.</p>
          </div>
        </ProdutcsTitle>
        <div className="row  gx-3 gy-3 mt-2 mb-2 mx-auto">
          {info.map((item, index) => {
            return <Info key={index} item={item} />;
          })}
        </div>
      </div>
    </>
  );
}

{
  /* <img src="./images/hero.jpg" className="hero" />
      <div className="quote">Your Window To Happiness</div> */
}
const ProdutcsTitle = styled.div`
  .main-heading {
    text-align: center;
  }

  .main-heading h2 {
    font-weight: normal;
    font-size: 40px;
    text-transform: uppercase;
    margin-bottom: 70px;
    position: relative;
  }

  .main-heading h2::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 2px;
    background-color: #333;
    bottom: -30px;
  }
  .main-heading h2::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: white;
    border: 1px solid #333;
    bottom: -37px;
  }
`;

const Landing = styled.div`
  .landing {
    min-height: 100vh;
    background-color: #1f2021;
    background-image: url('./images/hero.jpg');
    background-size: cover;
    position: relative;
  }

  .landing .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .landing .text {
    position: absolute;
    top: 50%;
    left: 0;
    width: 50%;
    padding: 60px;
    background-color: var(--transparent-color);
    transform: translateY(-50%);
    color: white;
    display: flex;
    justify-content: flex-end;
  }
  @media (max-width: 768px) {
    .landing .text {
      width: 100%;
    }
    .landing .text .content {
      width: 100%;
    }
  }
  .landing .text .content {
    max-width: 500px;
  }
  .landing .text .content h2 {
    font-size: 32px;
    line-height: 1.5;
    margin-bottom: 20px;
  }

  .landing .change-background {
    position: absolute;
    top: 50%;
    color: white;
    transform: translateY(-50%);
  }

  @media (max-width: 768px) {
    .landing .change-background {
      display: none;
    }
  }
`;
export default Home;
