import { createGlobalStyle } from "styled-components";

export const KeyFrames = createGlobalStyle`
@keyframes rotateDots {
  from {
    margin-top: 0px;
    transform: rotate(0deg);
  }
  50% {
    margin-top: 20px;
    transform: rotate(180deg);
  }
  to {
    margin-top: 0px;
    transform: rotate(360deg);
  }
}

@keyframes scrollBall {
  from {
    margin-top: 10px;
  }
  80% {
    margin-top: 30px;
  }
  to {
    margin-top: 10px;
  }
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

@keyframes slideToRightText {
  from {
    left: -182px;
  }
  to {
    left: 230px;
  }
}

@keyframes translateHotDog {
  from {
    right: 0;
    transform: rotate(0deg);
  }
  70% {
    transform: rotate(10deg);
  }
  to {
    right: 18%;
    transform: rotate(0deg);
  }
}

@keyframes menuUnderline {
  from {
    width: 0;
  }
  to {
    width: 100%;
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

@keyframes slideFromBottomMiddleSection {
  from {
    margin-top: 140px;
    opacity: 0;
  }
  to {
    margin-top: 70px;
    opacity: 1;
  }
}

@keyframes rotateImageOne {
  from {
    top: 20px;
    transform: rotate(-10deg);
  }
  50% {
    top: 0px;
    transform: rotate(10deg);
  }
  to {
    top: 20px;
    transform: rotate(-10deg);
  }
}

@keyframes rotateImageTwo {
  from {
    top: 0px;
    transform: rotate(10deg);
  }
  50% {
    top: 20px;
    transform: rotate(-10deg);
  }
  to {
    top: 0px;
    transform: rotate(10deg);
  }
}
`;
