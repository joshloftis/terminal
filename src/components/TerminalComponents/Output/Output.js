import PropTypes from 'prop-types';
import React from 'react';
import SpanForReturnedText from './styles';
import { StartLine, Arrow } from '../Terminal/styles';

const Output = ({ input, isCommand, isError, includeVerticalSpace }) => (
  <>
    <div>
      {isCommand && (
        <>
          <StartLine>~/sites/personal_website/terminal</StartLine>
          <Arrow />
        </>
      )}
      <SpanForReturnedText data-testid="returned-text" isCommand={isCommand} isError={isError}>
        {input}
      </SpanForReturnedText>
    </div>
    {includeVerticalSpace && <div />}
  </>
);

Output.defaultProps = {
  isCommand: false,
  isError: false,
  includeVerticalSpace: false,
};

Output.propTypes = {
  input: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isCommand: PropTypes.bool,
  includeVerticalSpace: PropTypes.bool,
  isError: PropTypes.bool,
};

export default Output;
