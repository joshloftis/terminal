import styled from 'styled-components';

export default styled.span`
  color: ${props => (!props.isCommand && props.isError ? '#fc618d' : 'white')};
`;
