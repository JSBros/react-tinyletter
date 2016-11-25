import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Welcome from './Welcome';
import TinyLetter from '../src';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('TinyLetter Component', module)
  .add('Default Component', () => (
    <TinyLetter list="ihasbeer">
      <input type="email"/>
      <input type="submit" value="Subscribe"/>
    </TinyLetter>
  ));
