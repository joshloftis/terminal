import styled from 'styled-components';
import media from '../../../styles/css/MediaTemplate';

export const Foot = styled.footer`
  flex-shrink: 0;
  margin: auto auto 0 auto;
  width: 100%;
`;

export const Section = styled.section`
  padding: 30px 200px;
  font-size: 0.8em;
  color: #fff;
  ${media.mobile`
    padding: 30px;
  `}
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  p {
    grid-column: span 6;
    margin: 0 auto;
    font-size: 1.3rem;
    &.aright {
      text-align: right;
    }
  }
`;
