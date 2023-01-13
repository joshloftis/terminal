import PropTypes from 'prop-types';
import React, { useState, useEffect, useRef } from 'react';
import ConsoleDiv from './styles';
import originalState from '../../../data/originalState.json';
import Output from '../Output';
import TypedText from '../InputField';
import { handleContextMenu, handleTyping } from '../../../lib/handlers';

const ConsoleArea = ({ theme, setTitle }) => {
  const [state, updateState] = useState(originalState);
  const scrollToCursor = useRef(null);

  useEffect(() => {
    scrollToCursor.current.scrollTop = scrollToCursor.current.scrollHeight;
  });

  const { inputLineHistory, userInput } = state;

  return (
    <ConsoleDiv
      ref={scrollToCursor}
      style={theme.field}
      onKeyDown={e => {
        e.persist();
        e.preventDefault();
        return updateState(curState => handleTyping(curState, e, setTitle));
      }}
      tabIndex={0}
      onContextMenu={e => {
        e.preventDefault();
        return handleContextMenu(state, updateState);
      }}
    >
      {inputLineHistory.map(({ text, isCommand, isError, includeVerticalSpace }) => {
        if (Array.isArray(text)) {
          return (
            <div key={Math.random()}>
              {text.map(s => (
                <Output key={Math.random()} input={s} isError={isError} />
              ))}
              {includeVerticalSpace && <div key={Math.random()} />}
            </div>
          );
        }

        return (
          <Output
            key={Math.random()}
            input={text}
            isCommand={isCommand}
            isError={isError}
            includeVerticalSpace={includeVerticalSpace}
          />
        );
      })}
      <TypedText input={userInput} theme={theme.cursor} />
    </ConsoleDiv>
  );
};

ConsoleArea.propTypes = {
  theme: PropTypes.object.isRequired,
  setTitle: PropTypes.func.isRequired,
};

export default ConsoleArea;
