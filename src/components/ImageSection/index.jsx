import styled from "styled-components";

const SectionImage = ({ imageSectionRef }) => (
  <SectionImageWrapper ref={imageSectionRef}>
    <div className="home-hero-scene-intro-wrapper">
      <div className="home-hero-scene-intro">
        <div className="home-catchphrase">
          Elden, delivering your favorite food in one click
        </div>
        <div className="home-catchphrase-underline" />
        <div className="home-subtitle">
          browse our partners selection and get 10% off on your first order
        </div>
        <ButtonWrapper>
          <span className="btn-first-text">download our app</span>
          <span className="btn-second-text">download our app</span>
        </ButtonWrapper>
      </div>
    </div>
    <div className="home-hero-scene-image-overlay"></div>
    <div className="home-hero-scene-image"></div>
  </SectionImageWrapper>
);

export default SectionImage;

const ButtonWrapper = styled.div`
  @keyframes bgSpinDown {
    from {
      transform: rotate(0deg);
    }
    30% {
      transform: rotate(5deg);
    }
    to {
      transform: rotate(0deg);
    }
  }

  @keyframes slideToRightText {
    from {
      left: -182px;
    }
    to {
      left: 230px;
    }
  }

  position: relative;
  overflow: hidden;
  background: #ff636a;
  border: none;
  height: 40px;
  width: 33%;
  border-radius: 32px;
  cursor: pointer;
  font-weight: 900;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: "Noah";
  color: #fff;
  margin-top: 30px;
  font-size: 11px;
  -webkit-font-smoothing: antialiased;
  transition: 0.5s all ease;

  &:hover {
    background-color: #ff6643;
  }

  .btn-first-text,
  .btn-second-text {
    position: absolute;
    top: 13px;
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
`;

const SectionImageWrapper = styled.div`
  color: #638eff;

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

  @keyframes slideFromLeftHome {
    from {
      left: 0%;
      opacity: 0;
    }
    to {
      left: 20%;
      opacity: 1;
    }
  }

  @keyframes underlineHome {
    from {
      width: 0%;
    }
    to {
      width: 50%;
    }
  }

  @keyframes overlayHome {
    from {
      width: 100%;
    }
    to {
      width: 0%;
    }
  }
  display: flex;
  align-items: center;
  width: 100%;
  height: 80vh;
  margin: 100px 0;

  .home-hero-scene-intro-wrapper {
    position: relative;
    width: 50%;
  }

  .searchbar {
    display: flex;
    width: 100%;
    margin-top: 30px;
  }

  .home-hero-scene-intro {
    display: flex;
    width: 70%;
    height: 85%;
    margin-left: 20%;
    z-index: 2;
    opacity: 0;
    flex-direction: column;
    justify-content: center;
    animation: 2s slideFromLeftHome;
    animation-fill-mode: forwards;
    animation-delay: 1s;

    .home-catchphrase {
      font-size: 42px;
      font-weight: 900;
    }

    .home-catchphrase-underline {
      background: #ff636a;
      height: 3px;
      margin-top: 30px;
      width: 50%;
      animation: 2s underlineHome;
    }

    .home-subtitle {
      font-size: 18px;
      margin-top: 30px;
      line-height: 23px;
      color: #fec1cb;
    }
  }

  .home-hero-scene-image-overlay {
    position: absolute;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: #fff;
    animation: 2s overlayHome;
    animation-fill-mode: forwards;
  }

  .home-hero-scene-image {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 35%;
    height: 55%;
    border-radius: 32px;
    background-image: url("/hero1.jpg");
    background-attachment: fixed;
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
