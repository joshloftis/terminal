import styled from 'styled-components';

export const Terminal = styled.div`
  transition: 0.2s;
  @media only screen and (max-width: 600px), (max-height: 600px) {
    height: 100%;
    width: 100vw;
    min-width: 100vw;
  }
`;

export const Window = styled.div`
  height: 40px;
  display: flex;
  margin-top: auto;
  align-items: center;
  padding: 0 15px;
  cursor: default;
`;

export const Button = styled.button`
  position: relative;
  margin-right: 10px;
  border: none;
  height: 13px;
  width: 13px;
  border-radius: 50%;
  box-shadow: 0 2px 2px #33333375;
  background-color: ${props => props.bgColor};
  &:hover:after {
    position: absolute;
    margin-top: -0.45rem;
    margin-left: -0.2rem;
    font-weight: 660;
    color: #52212f;
    content: 'x';
  }
`;

export const StartLine = styled.div`
  color: #35edd2;
  margin: 0 10px 5px 0;
  white-space: pre-line;
`;

export const Arrow = styled.span`
  display: inline-block;
  margin: 5px 5px 0 0;
  height: 20px;
  min-height: 20px;
  color: #fc618d;
  &:after {
    content: '❯ ';
  }
`;

export const Title = styled.span`
  font-size: 0.85rem;
  margin-left: 30px;
`;
