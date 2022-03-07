import { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";

const Hero = () => {
  const heroScene = useRef(null);
  const blueRef = useRef(null);
  const pinkRef = useRef(null);
  const yellowRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    blueRef.current.style.transform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${e.clientX},${e.clientY},0,1)`;
    pinkRef.current.style.transform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${e.clientX},${e.clientY},0,1)`;
    yellowRef.current.style.transform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${e.clientX},${e.clientY},0,1)`;
  }, []);

  useEffect(() => {
    const section = heroScene.current;
    section.addEventListener("mousemove", handleMouseMove, false);

    return () =>
      section.removeEventListener("mousemove", handleMouseMove, false);
  }, [handleMouseMove]);

  return (
    <HeroWrapper ref={heroScene}>
      <CursorShapesWrapper>
        <div ref={blueRef} className="hero-shape-item blue" />
        <div ref={pinkRef} className="hero-shape-item pink" />
        <div ref={yellowRef} className="hero-shape-item red" />
      </CursorShapesWrapper>
      <div className="hero-blend">
        <h1>Easy and eco-friendly delivery</h1>
      </div>
      <img className="home-hero-scene-image" src="elden.png" alt="mobile app" />
      <div className="dot blue-dot-center" />
      <div className="dot blue-dot-bottom" />
      <div className="dot blue-dot-right" />
      <div className="dot purple-dot-top" />
      <div className="dot purple-dot-right" />
      <div className="dot purple-dot-bottom" />
      <div className="dot green-dot-left" />
      <div className="dot green-dot-right" />
      <div className="dot green-dot-top" />
    </HeroWrapper>
  );
};

export default Hero;

const HeroWrapper = styled.div`
  align-items: center;
  color: #2128bd;
  display: flex;
  height: 100vh;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 100vw;

  .home-hero-scene-image {
    bottom: 0;
    position: absolute;
    transform: rotate(324deg);
    width: 550px;
  }

  .hero-blend {
    align-items: flex-start;
    background-color: white;
    color: black;
    display: flex;
    height: 100%;
    justify-content: center;
    mix-blend-mode: screen;
    padding-top: 25vh;
    width: 100%;

    h1 {
      font-family: "Voyage";
      text-align: center;
      font-size: 90px;
      width: 60%;
    }
  }

  @media screen and (max-width: 820px) {
    .hero-blend h1 {
      font-size: 56px;
      width: 80%;
    }

    .home-hero-scene-image {
      bottom: -300px;
    }
  }
`;

const CursorShapesWrapper = styled.div`
  background: #2128bd;
  bottom: -50px;
  contain: strict;
  display: block;
  left: -5px;
  overflow: hidden;
  position: absolute;
  right: -5px;
  top: -10px;

  .hero-shape-item {
    border-radius: 50%;
    left: 0;
    position: absolute;
    top: 0;
    will-change: transform;
    transition: 1s all ease;

    &.blue {
      background: #638dff;
      height: 650px;
      margin: -325px 0 0 -325px;
      width: 650px;
    }

    &.pink {
      background: #3ab6ac;
      height: 440px;
      margin: -220px 0 0 -220px;
      width: 440px;
    }

    &.red {
      background: #fe765f;
      height: 270px;
      margin: -135px 0 0 -135px;
      width: 270px;
    }
  }
`;
