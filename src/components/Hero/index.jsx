import { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";

const Hero = () => {
  const heroScene = useRef(null);
  const blueRef = useRef(null);
  const pinkRef = useRef(null);
  const yellowRef = useRef(null);
  const mousePoint = useRef(null);

  const handleMouseMove = useCallback((e) => {
    blueRef.current.style.transform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${e.clientX},${e.clientY},0,1)`;
    pinkRef.current.style.transform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${e.clientX},${e.clientY},0,1)`;
    yellowRef.current.style.transform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${e.clientX},${e.clientY},0,1)`;
    mousePoint.current.style.transform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${e.clientX},${e.clientY},0,1)`;
  }, []);

  useEffect(() => {
    const section = heroScene.current;
    section.addEventListener("mousemove", handleMouseMove, false);
    return () =>
      section.removeEventListener("mousemove", handleMouseMove, false);
  }, [handleMouseMove]);

  return (
    <HeroWrapper ref={heroScene}>
      <div className="hero-shape">
        <div ref={blueRef} className="hero-shape-item blue" />
        <div ref={pinkRef} className="hero-shape-item pink" />
        <div ref={yellowRef} className="hero-shape-item yellow" />
      </div>
      <div className="hero-blend">
        <h1>Hero Scene</h1>
      </div>
      <div ref={mousePoint} className="mouse-pointer" />
    </HeroWrapper>
  );
};

export default Hero;

const HeroWrapper = styled.div`
  align-items: center;
  color: #2128bd;
  display: flex;
  font-size: 72px;
  font-weight: bolder;
  height: 100vh;
  justify-content: center;
  position: relative;
  width: 100vw;

  .mouse-pointer {
    background: #2128bd;
    border-radius: 50%;
    height: 20px;
    left: 0;
    margin: -10px 0 0 -10px;
    position: absolute;
    top: 0;
    width: 20px;
    will-change: transform;
    z-index: 1;
  }

  .hero-shape {
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

      &.blue {
        background: #005ffe;
        height: 650px;
        margin: -325px 0 0 -325px;
        width: 650px;
      }

      &.pink {
        background: #ffe5e3;
        height: 440px;
        margin: -220px 0 0 -220px;
        width: 440px;
      }

      &.yellow {
        background: #ffcc57;
        height: 270px;
        margin: -135px 0 0 -135px;
        width: 270px;
      }
    }
  }

  .hero-blend {
    align-items: center;
    background-color: white;
    color: black;
    display: flex;
    height: 100%;
    justify-content: center;
    mix-blend-mode: screen;
    width: 100%;
  }
`;
