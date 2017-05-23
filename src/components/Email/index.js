import PropTypes from 'prop-types';
import React from 'react'
import styled from 'styled-components'

/**
 * The `Email` component is a very minimal input element.
 * It sets the type to `email` and the `placeholder`
 * to the value of the `placeholder` prop. If no placeholder
 * is set, it will set the placeholder to `email@site.com`.
 *
 * @return {ReactElement} - form wrapper markup
 */
function Email(props) {
  return (
    <input 
      type="email"
      placeholder={props.placeholder ? props.placeholder : 'email@site.com'}
      required
      { ...props }
    />
  )
}

Email.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
}

export default Email
