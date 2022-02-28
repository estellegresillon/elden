import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";

const Card = ({ restaurant, scrollPosition = 0, tabIndex }) => (
  <CardWrapper
    className={`tab-number-${tabIndex} restaurant`}
    tabIndex={tabIndex + 1}
  >
    <div className="card">
      <LazyLoadImage
        alt="restaurant-overview"
        scrollPosition={scrollPosition}
        src={restaurant.imageUrl}
        threshold={500}
      />

      <div className="card-description">
        <div className="card-header">
          <div className="card-header-type">
            {restaurant.type} -{" "}
            <span className="card-header-budget">{restaurant.price}</span>
          </div>
          <div className="card-header-rate">
            <i className="fas fa-star"></i> {restaurant.rate} (
            {restaurant.votes}+)
          </div>
        </div>
        <h2>{restaurant.name}</h2>
        <div className="card-restaurant-address">{restaurant.address}</div>
      </div>
    </div>
  </CardWrapper>
);

export default Card;

const CardWrapper = styled.div`
  .card {
    position: relative;
    height: 125px;
    display: flex;
    padding: 35px;
    background: white;
    margin-bottom: 30px;
    border-radius: 8px;
    background: #fe765f;
    color: white;
    box-shadow: 5px 5px 20px rgba(255, 122, 146, 0.5);
    transition: all 0.5s ease;

    &:hover {
      box-shadow: 15px 15px 30px rgba(255, 122, 146, 0.9);
    }

    img {
      width: 100%;
      max-width: 200px;
      height: auto;
    }

    img:hover {
      transition: all 0.5s ease;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    }

    .badge-wrapper {
      position: absolute;
      top: 42px;
      left: 42px;

      .tooltip-badge {
        display: none;
        top: 0;
        left: 30px;
      }

      &:hover {
        .tooltip-badge {
          display: block;
        }
      }
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;

      .card-header-rate {
        display: flex;
        align-items: center;

        i {
          font-size: 12px;
          margin-right: 5px;
          color: $foodlab;
        }
      }
    }

    .card-description {
      margin-left: 25px;
      width: 100%;
    }

    .card-header-budget {
      font-weight: 300;
      font-size: 13px;
      color: $main;
      margin-top: 10px;
    }

    .card-restaurant-address {
      font-size: 14px;
      margin-bottom: 25px;
    }

    .card-description {
      position: relative;
    }

    .card-description h2 {
      font-size: 22px;
      margin: 12px 0 3px 0;
      line-height: 22px;
    }

    .card-description p {
      font-size: 14px;
      opacity: 0.7;
      font-weight: lighter;
    }

    a {
      position: absolute;
      text-decoration: none;
      color: $main;
      width: 50px;
      bottom: 0;
    }

    .card-see-infos {
      margin-top: 10px;
      width: 82px;
      color: #fff;
      background-color: $foodlab;
      font-size: 12px;
      padding: 5px 10px;
      text-transform: uppercase;
      font-weight: 900;
      letter-spacing: 0.5px;
      border-radius: 3px;

      &:hover {
        background-color: $foodlab-hover;
      }

      &:active {
        background-color: $foodlab-active;
      }
    }
  }

  @media screen and (max-width: 728px) {
    .card {
      flex-direction: column;
      padding: 0;
      width: 100%;
      height: 100%;

      .badge-wrapper {
        top: 10px;
        left: 10px;
      }

      img {
        width: 100%;
        max-width: 500px;
        height: 110px;
        object-fit: cover;
      }

      .card-description {
        width: calc(100% - 40px);
        margin: 20px;
      }

      h2 {
        font-size: 15px;
        margin: 12px 0 3px 0;
        line-height: 22px;
        width: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  }
`;
