import styled from "styled-components";

import { CONCEPT_STEPS } from "utils/constants";

const SectionConcept = ({ conceptRef }) => (
  <SectionWrapper ref={conceptRef}>
    {CONCEPT_STEPS.map((step) => (
      <div key={step.nb} className={`home-concept-step home-step-${step.nb}`}>
        <img src={step.src} alt={step.nb}></img>
        <div className="home-concept-description">
          <span>{step.description}</span>
        </div>
      </div>
    ))}
  </SectionWrapper>
);

export default SectionConcept;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: flex-end;
  justify-content: space-evenly;
  background: #ffe5e3;
  padding: 10%;
  font-weight: 700;

  .home-concept-step {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 17%;
    align-items: center;
    justify-content: center;

    img {
      position: relative;
      width: 100%;
      height: auto;
      max-height: 130px;
    }
  }

  .home-step-one img,
  .home-step-three img {
    animation: 5s rotateImageOne infinite;
  }

  .home-step-two img {
    animation: 5s rotateImageTwo infinite;
  }

  .home-concept-description {
    margin-top: 60px;
    font-size: 16px;
    text-align: center;
    line-height: 36px;

    span {
      color: #fff;
      background-color: #638dff;
      box-shadow: 10px 0 0 #638dff, -10px 0 0 #638dff;
      padding: 7px 2px;
    }
  }

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;

    .home-concept-step {
      margin-bottom: 80px;
      width: 100%;
    }
  }
`;
