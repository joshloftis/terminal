import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*,
*::before,
*::after {
	box-sizing: border-box;
}
:focus,
:hover,
:active {
	outline: none;
}
html {
  min-height: 100%;
}
body {
	margin: 0;
	overflow: hidden;
	font-family: 'Blue_Mono', monospace;
  font-size: 100%;
  height: 100%;
  background-color: #000;
  background-image: radial-gradient(#100e23, #06050d), url("https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif");
  background-repeat: no-repeat;
  background-size: cover;
  font-size: 1.5rem;
  color: rgba(128, 255, 128, 0.8);
  text-shadow:
      0 0 1ex rgba(51, 255, 51, 1),
      0 0 2px rgba(255, 255, 255, 0.8);
	-webkit-font-smoothing: antialiased;
}
body:before {
		content:" ";
    display:block;
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
    z-index:2;
    background-size:100% 2px, 3px 100%;
    pointer-events:none;
}
body:after {
		content:" ";
    display:block;
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background:rgba(18, 16, 16, 0.1);
    opacity:0;
    z-index:2;
    pointer-events:none;
}

@keyframes blink-dark {
  0%, 100% {
    background-color: #F4F4F4;
  }
  50% {
    background-color: transparent;
  }
}
`;
