import styled from "styled-components";

import HeroScene from "../Hero";

const Home = () => (
  <HomeWrapper>
    <HeroScene />
  </HomeWrapper>
);

export default Home;

const HomeWrapper = styled.div`
  align-items: center;
  display: flex;
  width: 100vw;
`;
