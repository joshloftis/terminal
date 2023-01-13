import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Terminal from '../components/TerminalComponents/Terminal';
import TerminalStyles from '../styles/css/TerminalStyles';
import themes from '../data/themes.json';

const App = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default () => {
  const [theme, setTheme] = React.useState('dark');
  const history = useHistory();
  const themeVars = themes[theme];

  useEffect(() => {
    const handleResize = () => (window.innerWidth < 600 ? history.push('/home') : null);

    window.addEventListener('resize', handleResize);

    return _ => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <>
      <TerminalStyles />
      <App style={themeVars.app} />
      <Terminal theme={themeVars} setTheme={setTheme} />
    </>
  );
};
