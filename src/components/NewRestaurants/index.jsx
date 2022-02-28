import styled from "styled-components";

import { NEW_RESTAURANTS } from "utils/constants";
import Card from "components/common/Card";

const NewRestaurants = ({ newRestaurantsContainer }) => (
  <NewRestaurantsWrapper ref={newRestaurantsContainer}>
    <div className="home-new-title">
      <span className="home-new-title-text">Newcomers @ Elden</span>
    </div>

    <div className="new-restaurants-container">
      {NEW_RESTAURANTS.map((newRest, i) => (
        <Card key={i} restaurant={newRest} tabIndex={i} />
      ))}
    </div>
  </NewRestaurantsWrapper>
);

export default NewRestaurants;

const NewRestaurantsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10%;
  height: 80vh;
  width: 100%;
  overflow: hidden;
  background: pink;

  .home-new-title {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 30px;
    color: white;

    i {
      position: relative;
      animation: 3s rotateSvg infinite;
    }

    .home-weekly-title-text,
    .home-new-title-text {
      margin: 0 20px;
    }
  }

  .new-restaurants-container {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  .new-restaurant {
    margin-top: 20px;
    width: 60%;
    cursor: pointer;
    box-shadow: 2px 2px 12px rgba(214, 31, 31, 0.1);
  }

  .new-restaurant {
    width: 100%;
  }

  .new-restaurant:hover {
    transition: all 0.7s ease;
    box-shadow: 5px 5px 25px rgba(214, 31, 31, 0.2);
  }
`;
