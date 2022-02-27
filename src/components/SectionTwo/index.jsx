import styled from "styled-components";

const SectionTwo = () => (
  <SectionTwoWrapper>
    <div>Game by Hidetaka Miyazaki</div>
    <div>Music by Yuka Kitamura</div>
  </SectionTwoWrapper>
);

export default SectionTwo;

const SectionTwoWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 36px;
  height: 100vh;
  justify-content: center;
  text-align: center;
  width: 100%;
`;
