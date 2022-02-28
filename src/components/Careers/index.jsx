import { useState } from "react";
import styled from "styled-components";

import { CAREERS, INITIAL_PICTURE } from "utils/constants";

const Careers = ({ careersRef }) => {
  const [picture, setPicture] = useState(INITIAL_PICTURE);

  return (
    <CareersWrapper $picture={picture} ref={careersRef}>
      <h2>Work with us</h2>
      <div className="careers-intro-wrapper">
        {CAREERS.map((career) => (
          <div
            className="careers-item"
            key={career.title}
            onMouseEnter={() => setPicture(career.picture)}
          >
            <div className="careers-title">{career.title}</div>
            <div className="careers-description">{career.description}</div>
          </div>
        ))}
      </div>
      <div className="careers-image-overlay"></div>
      <div className="careers-image"></div>
    </CareersWrapper>
  );
};

export default Careers;

const CareersWrapper = styled.div`
  align-items: center;
  display: flex;
  font-size: 36px;
  height: 100vh;
  justify-content: center;
  text-align: center;
  width: 100%;
  position: relative;
  margin-top: 10%;

  h2 {
    position: absolute;
    font-size: 42px;
    top: 0%;
  }

  .careers-intro-wrapper {
    position: relative;
    width: 35%;
    margin-right: 10%;

    .careers-item {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 30px;

      .careers-description {
        color: #bbd6f9;
        font-size: 16px;
        width: 80%;
      }
    }
  }

  .careers-image-overlay {
    position: absolute;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: #fff;
    animation: 2s overlayHome;
    animation-fill-mode: forwards;
  }

  .careers-image {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 35%;
    height: 55%;
    border-radius: 32px;
    background-image: url("/${({ $picture }) => $picture}.jpg");
    background-attachment: fixed;
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
