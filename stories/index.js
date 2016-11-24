import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Welcome from './Welcome';
import Subscribe from '../src';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('HelloWorld', module)
  .add('Default Component', () => (
    <Subscribe list="ihasbeer">
      <input type="email"/>
      <input type="submit" value="Subscribe"/>
    </Subscribe>
  ));
