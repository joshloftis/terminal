import styled from 'styled-components';

export default styled.div`
  font-size: 1rem;
  line-height: 1.25rem;
  height: calc(100% - 40px);
  padding: 5px;
  overflow: auto;
  overflow-wrap: break-word;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &.dark::-webkit-scrollbar-thumb {
    background-color: #333444;
  }
  &.light::-webkit-scrollbar-thumb {
    background-color: #aca9bb;
  }
  div {
    min-height: 20px;
    width: 100%;
    cursor: default;
  }
  @media only screen and (max-width: 600px), (max-height: 600px) {
    height: 100%;
  }
`;
