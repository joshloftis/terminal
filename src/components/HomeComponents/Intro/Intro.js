import React from 'react';
import Avatar from '../Avatar';
import config from '../../../data/config.json';
import MorphButton from '../MorphButton';
import { Main, Aside, Section, Nav } from './styles';

export default () => (
  <Main>
    <Aside>
      <Avatar />
    </Aside>
    <Section>
      <h1>Josh Loftis</h1>
      <p>
        {config.defaults.about[0][0]} {config.defaults.job} {config.defaults.about[0][1]}{' '}
        <a href={config.defaults.url} target="_blank" rel="noopener noreferrer">
          {config.defaults.company}
        </a>
        .
      </p>
      <p>{config.defaults.about[1]}</p>
      <Nav>
        <ul>
          <li>
            <a href="https://github.com/joshloftis" target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/joshloftis/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
      </Nav>
      <MorphButton />
    </Section>
  </Main>
);
