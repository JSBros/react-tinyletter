import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import styled from 'styled-components';
import Welcome from './Welcome';
import { TinyLetter, Email, Submit } from '../src';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

const StyledEmail = styled(Email)`
  width: 50%;
`;

const StyledSubmit = styled(Submit)`
  width: 50%;
`;

storiesOf('TinyLetter Component', module)
  .add('w/ no children', () => (
    <TinyLetter list="ihasbeer"/>
  ))
  .add('w/ included components', () => (
    <TinyLetter list="ihasbeer">
      <Email/>
      <Submit/>
    </TinyLetter>
  ))
  .add('w/ element primitives', () => (
    <TinyLetter list="ihasbeer">
      <input type="email"/>
      <Submit type="submit"/>
    </TinyLetter>
  ))
  .add('w/ styled-components', () => (
    <TinyLetter list="ihasbeer">
      <StyledEmail/>
      <StyledSubmit/>
    </TinyLetter>
  ));
