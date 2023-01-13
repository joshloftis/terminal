export default (state, setState) => {
  if ('clipboard' in navigator) {
    navigator.clipboard.readText().then(clipboard => setState({ userInput: `${state.userInput}${clipboard}` }));
  }
};
