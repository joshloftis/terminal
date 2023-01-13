export default (type, cmd) => {
  const err = { text: '', isError: true, includeVerticalSpace: true };

  switch (type) {
    case 'no-cmd':
      err.text = `${cmd} : The term or expression '${cmd}' is not recognized. Check the spelling and try again. If you don't know what commands are recognized, type HELP.`;
      break;
    case 'missing-flags':
      err.text = `The ${cmd} command requires the use of flags. If you don't know what flags can be used, type HELP ${cmd}.`;
      break;
    case 'bad-flags':
      err.text = `The flags you provided for ${cmd} are not valid. If you don't know what flags can be used, type HELP ${cmd}.`;
      break;
    case 'missing-params':
      err.text = `The ${cmd.cmd} command requires ${cmd.noAccepted} parameter(s). If you don't know what parameters to use, type HELP ${cmd.cmd}.`;
      break;
    case 'no-help':
      err.text = `The command ${cmd} is not supported by the HELP utility.`;
      break;
    default:
      err.text = '';
      break;
  }
  return err;
};
