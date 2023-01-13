import styled from 'styled-components';
import media from '../../../styles/css/MediaTemplate';

export const LabelContainer = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 50px;
  width: 50px;
  background: #fce566;
  transition: all 2s;
  border-radius: 50%;
  z-index: 0;
  ${media.mobile`
    display: none;
  `}
`;

export const Label = styled.span`
  font-size: 2rem;
  position: relative;
  letter-spacing: 0.1em;
  text-align: center;
  color: #100e23;
  z-index: 8;
`;

export const Container = styled.div`
  margin-top: 20px;
  max-width: 70%;
  padding: 15px 0;
  overflow: hidden;
  position: relative;
  border-radius: 4px;
  background: #fce566;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  ${media.mobile`
    max-width: 100%;
  `}

  p {
    font-size: 2rem;
  }
  &:hover ${LabelContainer} {
    background: #35edd2;
    transform: scale(20);
  }
`;

export const EmailLink = styled.a`
  text-transform: none;
  font-size: 2rem;
  margin-right: 10px;
  text-decoration: none;
  color: #100e23;
`;

export const Button = styled.button`
  -webkit-appearance: none;
  border: none;
  cursor: pointer;
  background: #35edd2;
  border-radius: 2px;
  text-transform: uppercase;
  letter-spacing: 0.01em;
  color: #fff;
  height: 20px;
  vertical-align: 2px;
  z-index: 9;
`;

export const Copied = styled.span`
  font-size: 2rem !important;
  margin-bottom: 0 !important;
  color: #100e23;
  background: #35edd2;
  padding: 5px;
`;
