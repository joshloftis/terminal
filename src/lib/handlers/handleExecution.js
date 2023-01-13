import config from '../../data/config.json';
import originalState from '../../data/originalState.json';
import Commands from '../../data/commands.json';
import giveError from '../errors';

export default (state, cmd, params = [], flags = [], setTitle) =>
  ({
    about: () => ({
      ...state,
      inputLineHistory: [
        ...state.inputLineHistory,
        {
          text: [
            `${config.defaults.about[0][0]} ${config.defaults.job} ${config.defaults.about[0][1]} ${config.defaults.company}.`,
            config.defaults.about[1],
          ],
          includeVerticalSpace: true,
        },
      ],
    }),
    clear: () => ({ ...state, inputLineHistory: [] }),
    contact: () => ({
      ...state,
      inputLineHistory: [
        ...state.inputLineHistory,
        {
          text: config.defaults.contact,
          includeVerticalSpace: true,
        },
      ],
    }),
    date: () => ({
      ...state,
      inputLineHistory: [
        ...state.inputLineHistory,
        { text: `The current date is: ${new Date(Date.now()).toLocaleDateString()}`, includeVerticalSpace: true },
      ],
    }),
    echo: () => ({
      ...state,
      inputLineHistory: [...state.inputLineHistory, { text: `${params.join(' ')}`, includeVerticalSpace: true }],
    }),
    hello: () => {
      if (params.length === 1) {
        return {
          ...state,
          inputLineHistory: [
            ...state.inputLineHistory,
            {
              text: `Hello, ${params[0]
                .split(' ')
                .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
                .join(' ')}! Thanks for stopping by.`,
              includeVerticalSpace: true,
            },
          ],
        };
      }
      return {
        ...state,
        inputLineHistory: [...state.inputLineHistory, giveError('missing-params', { cmd: 'HELLO', noAccepted: 1 })],
      };
    },
    help: () => {
      if (params.length) {
        if (params.length > 1) {
          return {
            ...state,
            inputLineHistory: [...state.inputLineHistory, giveError('missing-params', { cmd: 'HELP', noAccepted: 1 })],
          };
        }
        const cmdsWithHelp = Commands.filter(cmds => cmds.help);

        if (cmdsWithHelp.filter(cmds => cmds.command === params[0]).length) {
          return {
            ...state,
            inputLineHistory: [
              ...state.inputLineHistory,
              {
                text: cmdsWithHelp.filter(cmds => cmds.command === params[0])[0].help,
                includeVerticalSpace: true,
              },
            ],
          };
        }
        if (Commands.filter(cmds => cmds.command === params[0]).length) {
          return {
            ...state,
            inputLineHistory: [
              ...state.inputLineHistory,
              {
                text: [
                  `No additional help needed for ${Commands.filter(
                    s => s.command === params[0]
                  )[0].command.toUpperCase()}`,
                  Commands.filter(s => s.command === params[0])[0].purpose,
                ],
                includeVerticalSpace: true,
              },
            ],
          };
        }

        return {
          ...state,
          inputLineHistory: [...state.inputLineHistory, giveError('no-help', params[0].toUpperCase())],
        };
      }

      return {
        ...state,
        inputLineHistory: [
          ...state.inputLineHistory,
          {
            text: [
              'Main commands:',
              ...Commands.sort((a, b) => a.command.localeCompare(b.command))
                .filter(({ isMain }) => isMain)
                .map(
                  ({ command, purpose }) =>
                    `${command.toUpperCase()}${Array.from({ length: 15 - command.length }, () => '.').join(
                      ''
                    )}${purpose}`
                ),
              '',
              'All commands:',
              ...Commands.sort((a, b) => a.command.localeCompare(b.command)).map(
                ({ command, purpose }) =>
                  `${command.toUpperCase()}${Array.from({ length: 15 - command.length }, () => '.').join('')}${purpose}`
              ),
              '',
              'For help about a specific command, type HELP <CMD>, e.g. HELP ABOUT.',
            ],
            includeVerticalSpace: true,
          },
        ],
      };
    },
    home: () => {
      window.location.href = '/home';
      setTitle(originalState.title);
      return {
        ...state,
        title: originalState.title,
        inputLineHistory: originalState.inputLineHistory,
      };
    },
    reset: () => {
      setTitle(originalState.title);
      return {
        ...state,
        title: originalState.title,
        inputLineHistory: originalState.inputLineHistory,
      };
    },
    skills: () => ({
      ...state,
      inputLineHistory: [
        ...state.inputLineHistory,
        {
          text: config.defaults.skills,
          includeVerticalSpace: true,
        },
      ],
    }),
    start: () => {
      if (params.length === 1) {
        setTimeout(() => window.open(/http/i.test(params[0]) ? params[0] : `https://${params[0]}`), 300);
        return {
          ...state,
          inputLineHistory: [
            ...state.inputLineHistory,
            { text: `Launching ${params[0]}...`, includeVerticalSpace: true },
          ],
        };
      }
      return {
        ...state,
        inputLineHistory: [...state.inputLineHistory, giveError('missing-params', { cmd: 'START', noAccepted: 1 })],
      };
    },
    time: () => ({
      ...state,
      inputLineHistory: [
        ...state.inputLineHistory,
        { text: `The current time is: ${new Date(Date.now()).toLocaleTimeString()}`, includeVerticalSpace: true },
      ],
    }),
    title: () => {
      setTitle(params.length > 0 ? params.join(' ') : '');
      return {
        ...state,
        inputLineHistory: [
          ...state.inputLineHistory,
          {
            text: `Set the React Terminal title to ${params.length > 0 ? params.join(' ') : '<BLANK>'}`,
            includeVerticalSpace: true,
          },
        ],
      };
    },
    whoami: () => ({
      ...state,
      inputLineHistory: [
        ...state.inputLineHistory,
        {
          text: `Hmm, that's quite philosophical of you. I'm impressed.`,
          includeVerticalSpace: true,
        },
      ],
    }),
  }[cmd]());
