import React from 'react';
import styled from 'styled-components';

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  margin-top: 1em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`; 

export const About = () => (
  <GridWrapper>
    <h2>About Bjoern</h2>
    <p>bjoernh@bu.edu</p>
    <p>+1 8574728458</p>
  </GridWrapper>
)