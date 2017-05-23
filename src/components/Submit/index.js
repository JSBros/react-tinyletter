import PropTypes from 'prop-types';
import React from 'react';


/**
 * The `Submit` component is a very minimal form submit
 * button. It sets the type to `submit` and the `value`
 * to the value of the `title` prop. If no title is set,
 * it will set the title to `Subscribe`.
 *
 * @return {ReactElement} - form wrapper markup
 */
function Submit(props) {
  return (
    <input
      type="submit"
      value={props.title ? props.title : 'Subscribe'}
      { ...props }
    />
  );
}

Submit.propTypes = {
  title: PropTypes.string,
}

export default Submit;
