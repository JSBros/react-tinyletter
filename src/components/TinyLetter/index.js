import React from 'react'

/**
 * The TinyLetter component acts as a wrapper
 * for the subscription form. It does not automatically
 * populate itself with input fields. Because of this,
 * To do a minimum implementation, you will need to do:
 *
 * ```jsx
 * <TinyLetter list="YourTinyLetterUsername">
 *   <input type="email"/>
 *   <input type="submit" value="Subscribe"/>
 * </TinyLetter>
 * ```
 * 
 * You need not worry about assigning the `name` or `id`
 * properties on form inputs, they will automatically get
 * added by the `TinyLetter` component. **However**, make
 * sure that you use the correct `type` on your input fields.
 * The `type` is how the `TinyLetter` component is able to
 * determine which `input` is which.
 *
 * @param {object} props - jsx attributes
 * @return {ReactElement} - form wrapper markup
 */
function TinyLetter(props) {
  function subscribe() {
    window.open(`https://tinyletter.com/${props.list}`,
        'popupwindow', 'scrollbars=yes,width=800,height=600')
    return true
  }
  const children = React.Children.map(props.children,
    child => child.props.type === 'email' ?
      React.cloneElement(child, {
        name: 'email',
        required: true
      }) :
      child
  )
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
