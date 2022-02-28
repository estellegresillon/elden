import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import Header from "../common/Header";
import Hero from "../Hero";
import SectionConcept from "../SectionConcept";
import ImageSection from "../ImageSection";
import Careers from "../Careers";
import NewRestaurants from "../NewRestaurants";
import ContactSection from "../ContactSection";
import Footer from "../Footer";

const usePrevious = (value) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const Home = () => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const conceptRef = useRef(null);
  const contactIconContainer = useRef(null);
  const imageSectionRef = useRef(null);
  const contactContainer = useRef(null);
  const contactTitle = useRef(null);
  const hotDogRef = useRef(null);
  const newRestaurantsContainer = useRef(null);
  const careersRef = useRef(null);
  const prevCount = usePrevious(count);

  const moveContactElements = (e) => {
    const pageMiddleX = window.innerWidth / 2;
    const pageMiddleY = window.innerHeight / 2;
    const distanceFromMiddleX = e.clientX - pageMiddleX;
    const distanceFromMiddleY = e.clientY - pageMiddleY;

    contactIconContainer.current.style.transform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${
      distanceFromMiddleX * 0.07
    },${distanceFromMiddleY * 0.08},0,1)`;
    contactTitle.current.style.transform = `matrix3d(1,0,0.00,${
      distanceFromMiddleX * 0.000002
    },0.00,1,0.00,0,0,0,1,0,${distanceFromMiddleX * -0.08},${
      distanceFromMiddleY * -0.08
    },0,1)`;
  };

  useEffect(() => {
    if (count < prevCount) {
      conceptRef.current.classList.remove("bg-spin-down");
      conceptRef.current.classList.add("bg-spin-up");
      contactContainer.current.classList.remove("bg-spin-down");
      contactContainer.current.classList.add("bg-spin-up");
      imageSectionRef.current.classList.remove("bg-spin-down");
      imageSectionRef.current.classList.add("bg-spin-up");
      newRestaurantsContainer.current.classList.remove("bg-spin-down");
      newRestaurantsContainer.current.classList.add("bg-spin-up");
      careersRef.current.classList.remove("bg-spin-down");
      careersRef.current.classList.add("bg-spin-up");
    } else if (count > prevCount) {
      conceptRef.current.classList.remove("bg-spin-up");
      conceptRef.current.classList.add("bg-spin-down");
      contactContainer.current.classList.remove("bg-spin-up");
      contactContainer.current.classList.add("bg-spin-down");
      imageSectionRef.current.classList.remove("bg-spin-up");
      imageSectionRef.current.classList.add("bg-spin-down");
      newRestaurantsContainer.current.classList.remove("bg-spin-up");
      newRestaurantsContainer.current.classList.add("bg-spin-down");
      careersRef.current.classList.remove("bg-spin-up");
      careersRef.current.classList.add("bg-spin-down");
    }
  }, [count, prevCount]);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        setCount(window.pageYOffset);
      },
      false
    );
    return () =>
      window.removeEventListener(
        "scroll",
        () => {
          setCount(null);
        },
        false
      );
  }, []);

  useEffect(() => {
    let contact = contactContainer?.current;
    contact.addEventListener("mouseenter", () => setIsVisible(true), false);
    return () =>
      contact.removeEventListener(
        "mouseenter",
        () => setIsVisible(true),
        false
      );
  }, []);

  useEffect(() => {
    let contact = contactContainer?.current;
    contact.addEventListener("mouseleave", () => setIsVisible(false), false);
    return () =>
      contact.removeEventListener(
        "mouseleave",
        () => setIsVisible(false),
        false
      );
  }, []);

  useEffect(() => {
    const container = contactContainer.current;
    container.addEventListener("mousemove", moveContactElements, false);
    return () =>
      container.removeEventListener("mousemove", moveContactElements, false);
  }, []);

  return (
    <HomeWrapper>
      <Header />
      <Hero />
      <SectionConcept conceptRef={conceptRef} />
      <ImageSection imageSectionRef={imageSectionRef} />
      <NewRestaurants newRestaurantsContainer={newRestaurantsContainer} />
      <Careers careersRef={careersRef} />
      <ContactSection
        contactContainer={contactContainer}
        contactIconContainer={contactIconContainer}
        contactTitle={contactTitle}
      />
      <Footer hotDogRef={hotDogRef} isVisible={isVisible} />
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  align-items: center;
  cursor: url("cursor.png"), auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: 0.5s cursor ease;
  width: 100vw;
`;
