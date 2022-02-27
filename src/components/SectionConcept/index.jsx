import styled from "styled-components";

export const CONCEPT_STEPS = [
  {
    nb: "one",
    src: "/search.svg",
    description:
      "Customer loyalty is our priority as we are only in delivering from the best providers",
  },
  {
    nb: "two",
    src: "/map.svg",
    description: "A large choice of food delivery for any taste and budget",
  },
  {
    nb: "three",
    src: "/mailbox.svg",
    description:
      "Get updated before everyone else of the new trending places in your mailbox",
  },
];

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
  &.bg-spin-up {
    animation: bgSpinUp 10s ease;
  }

  @keyframes bgSpinUp {
    from {
      transform: rotate(0deg);
    }
    20% {
      transform: rotate(-5deg);
    }
    to {
      transform: rotate(0deg);
    }
  }

  &.bg-spin-down {
    animation: bgSpinDown 10s ease;
  }

  @keyframes bgSpinDown {
    from {
      transform: rotate(0deg);
    }
    20% {
      transform: rotate(5deg);
    }
    to {
      transform: rotate(0deg);
    }
  }

  @keyframes rotateImageOne {
    from {
      top: 20px;
      transform: rotate(-10deg);
    }
    50% {
      top: 0px;
      transform: rotate(10deg);
    }
    to {
      top: 20px;
      transform: rotate(-10deg);
    }
  }

  @keyframes rotateImageTwo {
    from {
      top: 0px;
      transform: rotate(10deg);
    }
    50% {
      top: 20px;
      transform: rotate(-10deg);
    }
    to {
      top: 0px;
      transform: rotate(10deg);
    }
  }

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
`;
