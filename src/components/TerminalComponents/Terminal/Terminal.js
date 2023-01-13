import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import ConsoleArea from '../ConsoleArea';
import originalState from '../../../data/originalState.json';
import { Terminal as TermWindow, Window, Button as ExitButton, Title } from './styles';

const Terminal = ({ theme, setTheme }) => {
  const history = useHistory();
  const [title, setTitle] = React.useState(originalState.title);
  const handleClose = () => history.push('/home');

  return (
    <TermWindow style={theme.terminal}>
      <Window style={theme.window}>
        <ExitButton bgColor="#fc618d" onClick={handleClose} />
        <Title style={{ color: theme.window.color }}>{title}</Title>
      </Window>
      <ConsoleArea theme={theme} setTheme={setTheme} setTitle={setTitle} />
    </TermWindow>
  );
};

Terminal.propTypes = {
  theme: PropTypes.object.isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default Terminal;
