import styled from 'styled-components';
import MediaTemplate from '../../../styles/css/MediaTemplate';

export const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr auto 1fr;
  margin: auto auto;
  padding-top: 50px;
  max-width: 90%;
  height: 100%;
  ${MediaTemplate.mobile`
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: none;
  `}
`;

export const Aside = styled.aside`
  grid-column: 5 / span 1;
  grid-row-start: 1;
  text-align: center;
  max-height: 170px;
  max-width: 170px;
  min-height: 170px;
  min-width: 170px;
  ${MediaTemplate.mobile`
    grid-column: 1 / -1;
    grid-row-start: 1;
    padding-bottom: 60px;
  `}
`;

export const Section = styled.section`
  grid-column: 2 / span 3;
  grid-row-start: 1;
  padding-right: 10px;
  ${MediaTemplate.mobile`
    grid-row-start: 2;
    grid-column: 1 /-1;
    margin-top: 30px;
  `}

  h1 {
    font-size: 3rem;
    font-weight: bold;
    padding-bottom: 20px;
    ${MediaTemplate.mobile`
      font-size: 2rem;
  `}
  }

  p {
    font-size: 1.15rem;
    margin-bottom: 10px;
    ${MediaTemplate.mobile`
      font-size: 1rem;
  `}
    a {
      text-transform: none;
      text-decoration: none;
      color: #fc618d;
      transition: 0.2s ease-in-out;
      &:hover {
        display: inline-block;
        background: #35edd2;
        color: #fff;
        -webkit-transform: skew(-10deg);
        transform: skewX(-10deg);
      }
    }
  }
`;

export const Nav = styled.nav`
  padding: 10px;
  ul {
    display: inline-block;
    li {
      display: inline-block;
      margin-right: 20px;
      list-style: none;
      font-size: 1.3rem;
      a {
        font-size: 1rem;
        text-transform: none;
        text-decoration: none;
        color: #fc618d;
        transition: 0.2s ease-in-out;
        &:hover {
          display: inline-block;
          background: #35edd2;
          color: #fff;
          -webkit-transform: skew(-10deg);
          transform: skewX(-10deg);
        }
      }
    }
  }
`;
