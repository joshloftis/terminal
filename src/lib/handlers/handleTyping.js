import forbiddenKeys from '../forbiddenKeys';
import handleEvaluation from './handleEvaluation';

export default (state, e, setTitle) => {
  const { key, ctrlKey, altKey } = e;
  let newState = {...state};
  if (!forbiddenKeys.some(s => s === key) && !ctrlKey && !altKey) {
    if (key === 'Backspace') {
      newState = { ...state, userInput: state.userInput.slice(0, -1) };
    } else if (key === 'Escape') {
      newState = { ...state, userInput: '' };
    } else if (key === 'ArrowUp' || key === 'ArrowLeft') {
      const { commandHistory, commandHistoryIndex } = state;
      const upperLimit = commandHistoryIndex >= commandHistory.length;

      if (!upperLimit) {
        newState = {
          ...state,
          commandHistoryIndex: (state.commandHistoryIndex += 1),
          userInput: state.commandHistory[state.commandHistoryIndex - 1],
        };
      }
    } else if (key === 'ArrowDown' || key === 'ArrowRight') {
      const { commandHistoryIndex } = state;
      const lowerLimit = commandHistoryIndex === 0;

      if (!lowerLimit) {
        newState = {
          ...state,
          commandHistoryIndex: (state.commandHistoryIndex -= 1),
          userInput: state.commandHistory[state.commandHistoryIndex - 1] || '',
        };
      }
    } else if (key === 'Enter') {
      const { userInput } = state;

      if (userInput.length) {
        const partialState = {
          ...state,
          commandHistory: userInput === '' ? state.commandHistory : [userInput, ...state.commandHistory],
          commandHistoryIndex: 0,
          inputLineHistory: [...state.inputLineHistory, { text: userInput, isCommand: true }],
          userInput: '',
        };
        newState = handleEvaluation(partialState, userInput, setTitle);
      } else {
        newState = {
          ...state,
          inputLineHistory: [...state.inputLineHistory, { isCommand: true }],
        };
      }
    } else {
      newState = {
        ...state,
        commandHistoryIndex: 0,
        userInput: (state.userInput += key),
      };
    }
  }

  return newState;
};
