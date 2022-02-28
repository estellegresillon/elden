import styled from "styled-components";

const CAREERS = [
  {
    title: "Deliver with Elden",
    description:
      "Roulez avec Deliveroo et travaillez à votre propre rythme. En rejoignant la communauté de livreurs et livreuses partenaires de Deliveroo, vous profiterez également de tout un tas d'avantages et de réductions.",
    button: "get to know us",
  },
  {
    title: "Restaurants",
    description:
      "Devenez partenaire de Deliveroo et attirez encore plus de clients. Nous gérons la livraison, vous ne gérez que la préparation !",
    button: "become a partner",
  },
  {
    title: "Careers",
    description:
      "Notre mission est de révolutionner la manière dont vous commandez vos plats. C'est un projet ambitieux, comme nous. Et nous avons besoin de vous pour nous aider !",
    button: "see our job offers",
  },
];

const Careers = ({ careersRef }) => (
  <CareersWrapper ref={careersRef}>
    {CAREERS.map((career) => (
      <div key={career.title}>{career.title}</div>
    ))}
  </CareersWrapper>
);

export default Careers;

const CareersWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 36px;
  height: 100vh;
  justify-content: center;
  text-align: center;
  width: 100%;
`;
