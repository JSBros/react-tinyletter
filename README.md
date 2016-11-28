![React TinyLetter Component](https://jsbros.github.io/react-tinyletter/banner.png)

[![David](https://img.shields.io/david/jsbros/react-tinyletter.svg?style=flat-square)](https://github.com/JSBros/react-tinyletter/issues) [![Gitter](https://img.shields.io/gitter/room/JSBros/react-tinyletter.svg?style=flat-square)](https://gitter.im/JSBros/react-tinyletter?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Setup

```
$ npm install --save react-tinyletter
```
or...

```
$ yarn add react-tinyletter
```

## Usage 

The TinyLetter component acts as a wrapper for the subscription form. It automatically populates itself with input fields if no children are added. You can also manually add the children elements. Below are some examples of the various implementations.

## Using the auto-injected inputs

```jsx
{ TinyLetter } from 'react-tinyletter';
...
<TinyLetter list="YourTinyLetterUsername"/>
```

## Using the included input components

```jsx
import { TinyLetter, Email, Submit } from 'react-tinyletter';
...
<TinyLetter list="YourTinyLetterUsername">
  <Email/>
  <Submit/>
</TinyLetter>
```
 
## Using input primitives

```jsx
import { TinyLetter } from 'react-tinyletter';
...
<TinyLetter list="YourTinyLetterUsername">
  <input type="email"/>
  <input type="submit" value="Subscribe"/>
</TinyLetter>
```

You need not worry about assigning the `name` or `id` properties on form inputs, they will automatically get added by the `TinyLetter` component. **However**, make sure that you use the correct `type` on your input fields if using primitives, as the `type` is how the `TinyLetter` component is able to determine which `input` is which.

## Style it with [<💅>](https://github.com/styled-components/styled-components)

```jsx
import { TinyLetter, Email, Submit } from 'react-tinyletter'
import styled from 'styled-components'

...

const StyledEmail = styled(Email)`
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  border: 1px solid #ccc;
  font-size: 18px;
  font-weight: 100;
  width: 70%;
`

const StyledSubmit = styled(Submit)`
  background: transparent;
  border-bottom-left-radius: 0;
  border-left: none;
  border-top-left-radius: 0;
  border: 1px solid #ccc;
  width: 30%;
  &:hover {
    background-color: #ccc;
    cursor: pointer;
  }
  &:active {
    background-color: deepskyblue;
    color: white;
  }
`
...
<TinyLetter list="TinyLetterUsername">
  <StyledEmail/>
  <StyledSubmit/>
</TinyLetter>
```

## Documentation Reference

[View the reference docs →](https://jsbros.github.io/react-tinyletter/docs/)

## Contribution Guidelines

* All commit messages must follow the [semantic commit message guidelines](https://seesparkbox.com/foundry/semantic_commit_messages)
* All releases must follow the [SemVer guidelines](http://semver.org)

## Authors

[Author List →](https://github.com/JSBros/react-tinyletter/blob/master/AUTHORS.md)

## License

The React Component Boilerplate is under the [MIT](https://github.com/JSBros/react-tinyletter/blob/master/LICENSE.md) License.

