import React from 'react'

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
