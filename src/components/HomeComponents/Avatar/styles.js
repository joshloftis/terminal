import styled from 'styled-components';

export default styled.div`
  position: relative;
  overflow: visible;
  .before,
  .after {
    content: '';
    display: block;
    padding-bottom: 100%;
    border-radius: 50%;
    position: absolute;
    z-index: 0;
    transition: left 0.8s ease-in-out, top 0.8s ease-in-out;
    width: 170px;
    height: 170px;
  }
  span.before {
    background: linear-gradient(135deg, #fd0 0, #f5009b 79%, #e52424 100%);
    left: -9px;
    top: -9px;
  }
  span.after {
    background: linear-gradient(135deg, #08f 0, #00bdef 35%, #00ffdc 100%);
    top: 12px;
    left: 9px;
  }
  img {
    max-width: 100%;
    height: 170px;
    width: 170px;
    border-radius: 50%;
    display: block;
    position: relative;
    z-index: 1;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  &:hover .before {
    transition: left 0.4s ease-in-out, top 0.4s ease-in-out;
    top: -3px;
    left: -3px;
  }
  &:hover .after {
    transition: left 0.4s ease-in-out, top 0.4s ease-in-out;
    top: 4px;
    left: 3px;
  }
`;
