import styled from "styled-components";

const Footer = ({ hotDogRef, isVisible }) => (
  <FooterWrapper>
    <div className="footer-img">
      <img
        className="fried-potatoes"
        src="/fried-potatoes.svg"
        alt="fried-potatoes"
      />
      <img
        className="fried-chicken"
        src="/fried-chicken.svg"
        alt="fried-chicken"
      />
      <img
        className="hot-dog"
        src="/hot-dog.svg"
        alt="hot-dog"
        ref={hotDogRef}
        style={{
          visibility: isVisible ? "visible" : "hidden",
          animation: isVisible ? "3s translateHotDog" : "",
        }}
      />
      <img className="cola" src="/cola.svg" alt="cola" />
    </div>
    <div className="home-footer">
      <div className="home-footer-brand">© 2022 Elden Ring &#x2661;</div>
    </div>
  </FooterWrapper>
);

export default Footer;

const FooterWrapper = styled.div`
  width: 100%;
  height: 15vh;
  position: absolute;
  bottom: 0;
  overflow: hidden;

  .footer-img {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    height: 50%;
    background-color: #ddecff;

    img {
      width: auto;
      margin-right: -2px;
    }
    .fried-potatoes {
      height: 20px;
    }
    .fried-chicken {
      height: 40px;
    }
    .hot-dog {
      position: absolute;
      height: 50px;
      right: 18%;
    }
    .cola {
      margin-right: 10%;
      height: 30px;
    }
  }

  .home-footer {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 50%;
    background-color: #638dff;
    color: #fff;
    font-weight: 900;
    font-size: 14px;
    padding-left: 10vh;
  }
`;
