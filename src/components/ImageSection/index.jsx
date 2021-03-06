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
          <span className="btn-first-text">see our restaurant list</span>
          <span className="btn-second-text">see our restaurant list</span>
        </ButtonWrapper>
      </div>
    </div>
    <div className="home-hero-scene-image" />
  </SectionImageWrapper>
);

export default SectionImage;

const ButtonWrapper = styled.div`
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

  @media screen and (max-width: 820px) {
    width: 150px;
  }
`;

const SectionImageWrapper = styled.div`
  color: #638eff;
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
    margin: 0 30%;
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

  .home-hero-scene-image {
    background: url(restaurants.jpg);
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
    width: 50%;
    height: 60%;
    margin: 8%;
    border-radius: 20px;
  }

  @media screen and (max-width: 820px) {
    flex-direction: column;
    height: auto;
    margin: 10%;
    width: 80%;

    .home-hero-scene-intro-wrapper {
      width: 100%;

      .home-hero-scene-intro {
        width: 100%;
        height: auto;
        margin: 0;
      }
    }

    .home-concept-step {
      margin-bottom: 80px;
    }
  }
`;
