import React from 'react';
import { Foot, Section, GridWrapper } from './styles';

export default () => (
  <Foot>
    <Section>
      <GridWrapper>
        <p>© Josh Loftis {new Date().getFullYear()}</p>
      </GridWrapper>
    </Section>
  </Foot>
);
