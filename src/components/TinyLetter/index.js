import React from 'react'
import { Email, Submit } from '../'

/**
 * The TinyLetter component acts as a wrapper
 * for the subscription form. It automatically populates
 * itself with input fields if no children are added.
 * You can also manually add the children elements.
 * Below are some examples of the various implementations.
 *
 * ## Using the auto-injected inputs
 *
 * ```jsx
 * { TinyLetter } from 'react-tinyletter';
 * ...
 * <TinyLetter list="YourTinyLetterUsername"/>
 * ```
 *
 * ## Using the included input components
 *
 * ```jsx
 * import { TinyLetter, Email, Submit } from 'react-tinyletter';
 * ...
 * <TinyLetter list="YourTinyLetterUsername">
 *   <Email/>
 *   <Submit/>
 * </TinyLetter>
 * ```
 * 
 * ## Using input primitives
 *
 * ```jsx
 * import { TinyLetter } from 'react-tinyletter';
 * ...
 * <TinyLetter list="YourTinyLetterUsername">
 *   <input type="email"/>
 *   <input type="submit" value="Subscribe"/>
 * </TinyLetter>
 * ```
 * 
 * You need not worry about assigning the `name` or `id`
 * properties on form inputs, they will automatically get
 * added by the `TinyLetter` component. **However**, make
 * sure that you use the correct `type` on your input fields
 * if using primitives, as the `type` is how the `TinyLetter`
 * component is able to determine which `input` is which.
 *
 * @param {object} props - jsx attributes
 * @return {ReactElement} - form wrapper markup
 */
function TinyLetter(props) {
  function subscribe() {
    window.open(`httpsd://tinyletter.com/${props.list}`,
        'popupwindow', 'scrollbars=yes,width=800,height=600')
    return true
  }
  const children = props.children ? React.Children.map(props.children,
    child => child.props.type === 'email' ?
      React.cloneElement(child, {
        name: 'email',
        required: true
      }) :
      child
  ) : (<div><Email/><Submit/></div>)
  return (
    <form
      action={`https://tinyletter.com/${props.list}`}
      method="post"
      target="popupwindow"
      onSubmit={subscribe}
      {...props}
      >
      <input type="hidden" value="1" name="embed" />
      {children}
    </form>
  )
}

TinyLetter.propTypes = {
  children: React.PropTypes.node,
  list: React.PropTypes.string,
}

export default TinyLetter
