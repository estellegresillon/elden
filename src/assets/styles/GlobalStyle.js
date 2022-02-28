import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
.bg-spin-up {
  animation: bgSpinUp 10s ease;
}

.bg-spin-down {
  animation: bgSpinDown 10s ease;
}

.dot {
  position: absolute;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  opacity: 0.3;
}

.blue-dot-center {
  top: 7vh;
  left: 35vw;
  background-color: #638dff;
  transform: rotate(42deg);
  animation: 5s rotateDots infinite linear;
}

.blue-dot-right {
  top: 17vh;
  right: 10vw;
  background-color: #638dff;
  transform: rotate(67deg);
  animation: 3s rotateDots infinite;
}

.blue-dot-bottom {
  top: 60vh;
  left: 20vw;
  background-color: #638dff;
  transform: rotate(67deg);
  animation: 3s rotateDots infinite;
}

.green-dot-left {
  top: 90vh;
  left: 30vw;
  background-color: #3ab6ac;
  transform: rotate(67deg);
  animation: 5s rotateDots infinite linear;
}

.green-dot-right {
  top: 75vh;
  right: 4vw;
  background-color: #3ab6ac;
  animation: 3s rotateDots infinite;
}

.green-dot-top {
  top: 15vh;
  left: 10vw;
  background-color: #3ab6ac;
  animation: 3s rotateDots infinite;
}

.purple-dot-top {
  top: 27vh;
  left: 52vw;
  background-color: #fe765f;
  animation: 5s rotateDots infinite linear;
}

.purple-dot-bottom {
  top: 80vh;
  left: 5vw;
  background-color: #fe765f;
  animation: 2s rotateDots infinite;
}

.purple-dot-right {
  top: 60vh;
  right: 25vw;
  background-color: #fe765f;
  animation: 2s rotateDots infinite;
}
`;
