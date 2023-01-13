import { evaluate, isNaN } from 'mathjs';
import giveError from '../errors';
import handleExecution from './handleExecution';
import Commands from '../../data/commands.json';

export default (state, input, setTitle) => {
  try {
    const evaluatedForArithmetic = evaluate(input);

    if (!isNaN(evaluatedForArithmetic)) {
      return {
        ...state,
        inputLineHistory: [...state.inputLineHistory, { text: evaluatedForArithmetic, includeVerticalSpace: true }],
      };
    }

    throw Error;
  } catch (err) {
    const cleanedInput = input
      .toLowerCase()
      .trim()
      .split(' ');
    const parsedCmd = cleanedInput[0];
    const parsedParams = cleanedInput.slice(1).filter(s => s[0] !== '-');
    const parsedFlags = cleanedInput.slice(1).filter(s => s[0] === '-');
    const isError = !Commands.some(s => s.command === parsedCmd);

    if (isError) {
      return { ...state, inputLineHistory: [...state.inputLineHistory, giveError('no-cmd', input)] };
    }

    return handleExecution(state, parsedCmd, parsedParams, parsedFlags, setTitle);
  }
};
