![React TinyLetter Component](https://jsbros.github.io/react-tinyletter/banner.png)
[![David](https://img.shields.io/david/jsbros/react-component-boilerplate.svg?style=flat-square)](https://github.com/JSBros/react-component-boilerplate/issues) [![Gitter](https://img.shields.io/gitter/room/JSBros/react-component-boilerplate.svg?style=flat-square)](https://gitter.im/JSBros/react-component-boilerplate?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Setup

```
$ npm install --save react-tinyletter
```
or...

```
$ yarn add react-tinyletter
```

## Usage 

```jsx
import Subscribe from 'react-tinyletter'

...

<Subscribe list="TinyLetterUsername">
  <input type="email"/>
  <input type="submit" value="Subscribe"/>
</Subscribe>
```

## Style it with [<💅>](https://github.com/styled-components/styled-components)

```jsx
import Subscribe from 'react-tinyletter'
import styled from 'styled-components'

...

const StyledSubscribe = styled(Subscribe)`
  border: 1px solid deepskyblue;
  padding: 25px;
  width: 100%;
`
...
<StyledSubscribe list="TinyLetterUsername">
  <input type="email"/>
  <input type="submit" value="Subscribe"/>
</StyledSubscribe>
```

## Documentation Reference

[View the reference docs →](https://jsbros.github.io/react-tinyletter/index.html)

## Contribution Guidelines

* All commit messages must follow the [semantic commit message guidelines](https://seesparkbox.com/foundry/semantic_commit_messages)
* All releases must follow the [SemVer guidelines](http://semver.org)

## Authors

[Author List →](AUTHORS.md)

## License

The React Component Boilerplate is under the [MIT](LICENSE.md) License.

