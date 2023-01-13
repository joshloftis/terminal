import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  ::selection {
    background: #35edd2;
    /* WebKit/Blink Browsers */
  }

  ::-moz-selection {
    background: #35edd2;
    /* Gecko Browsers */
  }


html {
  min-height: 100%;
}
body {
	margin: 0;
	font-family: 'Blue_Mono', monospace;
  height: 100%;
  background-color: #000;
  background-image: radial-gradient(#100e23, #06050d), url("https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif");
  background-repeat: no-repeat;
  background-size: cover;
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

  h1 {
    color: #948ae3;
    text-shadow:
      0 0 1ex rgba(148, 138, 227, 1),
      0 0 2px rgba(255, 255, 255, 0.8);
  }

  #root {
    height: 100%;
  }
`;
