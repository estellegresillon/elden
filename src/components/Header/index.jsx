import styled from "styled-components";

const TopBar = () => (
  <TopBarWrapper>
    <div className="header-left">
      <div className="elden-logo">
        <img src="logo.png" alt="elden" />
        Elden
      </div>
    </div>
    <div className="header-right">
      <div className="menu-link">
        <div>Order now</div>
        <div className="menu-underline" />
      </div>
      <div className="menu-link">
        <div>Become a partner</div>
        <div className="menu-underline" />
      </div>
      <div className="menu-link">
        <div>About us</div>
        <div className="menu-underline" />
      </div>
      <div className="menu-link">
        <div>Log in</div>
        <div className="menu-underline" />
      </div>
    </div>
  </TopBarWrapper>
);

export default TopBar;

const TopBarWrapper = styled.div`
  @keyframes menuUnderline {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 80px;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;

  .header-left {
    display: flex;
    flex-direction: row;
    width: 85%;
    margin-top: -10px;

    .elden-logo {
      font-size: 20px;
      margin: 0 70px;
      color: #638eff;
      letter-spacing: -1px;
      cursor: pointer;

      img {
        height: 20px;
        margin-bottom: -3px;
        width: 20px;
      }
    }
  }

  .header-right {
    display: flex;
    flex-direction: row;
    margin-right: 70px;
    font-size: 14px;
    width: 100%;
    justify-content: flex-end;
    text-align: end;
    margin-top: 5px;

    .menu-link {
      text-decoration: none;
      margin-left: 50px;
      cursor: pointer;
      font-size: 12px;
      text-transform: uppercase;
      font-weight: 900;
      transition: 0.5s all ease;
      white-space: nowrap;

      .menu-underline {
        margin-top: 5px;
        border-top: 1px solid transparent;
        width: 0px;
      }

      &:hover {
        color: #f54c4c;
        .menu-underline {
          border-top: 1px solid #f54c4c;
          animation: 1s menuUnderline;
          animation-fill-mode: forwards;
        }
      }
    }
  }
`;
