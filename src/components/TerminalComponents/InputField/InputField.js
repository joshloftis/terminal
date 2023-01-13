import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import { StartLine, Arrow } from '../Terminal/styles';

const InputField = ({ input, theme }) => {
  const focused = useRef(null);

  useEffect(() => {
    focused.current.focus();
  }, [focused]);

  return (
    <div>
      <StartLine>~/sites/personal_website/terminal</StartLine>
      <Arrow />
      <span data-testid="user-text-span" ref={focused} tabIndex="-1">
        {input}
      </span>
      <div style={theme} />
    </div>
  );
};

InputField.propTypes = {
  input: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
};

export default InputField;
