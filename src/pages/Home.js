import React, { Suspense } from 'react';
import styled from 'styled-components';
import Footer from '../components/HomeComponents/Footer';
import Intro from '../components/HomeComponents/Intro';

const BasicStyles = React.lazy(() => import('../styles/css/BasicStyles'));

const Container = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export default () => (
  <Suspense fallback={<div>Loading...</div>}>
    <BasicStyles />
    <Container>
      <Intro />
      <Footer />
    </Container>
  </Suspense>
);
