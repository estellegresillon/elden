import styled from "styled-components";

const CONTACT_ICONS = [
  "burger",
  "lobster",
  "salad",
  "ice-cream",
  "pizza",
  "pasta",
];

const ContactSection = ({
  contactIconContainer,
  contactContainer,
  contactTitle,
}) => (
  <ContactWrapper ref={contactContainer}>
    <div className="gradient-stroke" ref={contactTitle} id="home-contact-title">
      Get delivered within minutes
    </div>
    <button className="go-to-contact">
      <span className="btn-first-text">download our app</span>
      <span className="btn-second-text">download our app</span>
    </button>

    <IconContainer ref={contactIconContainer}>
      {CONTACT_ICONS.map((icon) => {
        return (
          <img
            key={icon}
            className={`contact-${icon}`}
            src={`contact-${icon}.svg`}
            alt={`${icon}-animation`}
          />
        );
      })}
    </IconContainer>
  </ContactWrapper>
);

export default ContactSection;

const ContactWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ddecff;
  padding: 0 20% 10% 20%;
  overflow: hidden;

  .gradient-stroke {
    background: #638eff;
    -webkit-background-clip: text;
    -webkit-text-stroke: 4px transparent;
    color: #ddecff;
    font-size: 60px;
    font-weight: 900;
    width: 45vw;
    height: 19vh;
    transition: 1s all ease;
  }

  .go-to-contact {
    position: relative;
    overflow: hidden;
    z-index: 999;
    background: #638dff;
    border: none;
    height: 52px;
    width: 230px;
    border-radius: 32px;
    cursor: pointer;
    font-weight: 900;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #fff;
    font-size: 12px;
    margin-top: 50px;
    -webkit-font-smoothing: antialiased;
    transition: 0.5s all ease;

    &:hover {
      background-color: #2251d0;
    }

    .btn-first-text,
    .btn-second-text {
      position: absolute;
      top: 19px;
      width: 200px;
    }

    .btn-first-text {
      left: -182px;
      animation: slideToRightText 8s linear infinite;
    }

    .btn-second-text {
      left: -182px;
      animation: slideToRightText 8s linear infinite;
      animation-delay: 4s;
    }
  }
`;

const IconContainer = styled.div`
  position: absolute;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  transition: 1s all ease;

  img {
    position: absolute;
    height: 50px;
    width: auto;

    &.contact-burger {
      top: 25vh;
      left: 30vw;
      transform: rotate(42deg);
    }

    &.contact-lobster {
      top: 55vh;
      left: 15vw;
      transform: rotate(30deg);
    }

    &.contact-salad {
      top: 85vh;
      left: 30vw;
      transform: rotate(-42deg);
    }

    &.contact-ice-cream {
      top: 25vh;
      right: 30vw;
      transform: rotate(-42deg);
    }

    &.contact-pizza {
      top: 55vh;
      right: 15vw;
      transform: rotate(2deg);
    }

    &.contact-pasta {
      top: 85vh;
      right: 30vw;
      transform: rotate(42deg);
    }
  }
`;
