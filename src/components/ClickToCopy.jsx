import React from 'react';
import PropTypes from 'prop-types'

const ClickToCopy = ({
  children = 'Copy',
  text = '',
  onSuccess,
  onError,
  style = {}
}) => {
  function handleClick() {
    navigator.clipboard.writeText(text).then(function() {
      /* clipboard successfully set */
      onSuccess?.()
    }, function(err) {
      /* clipboard write failed */
      onError?.(err)
    });
  }

  return <span style={style} onClick={handleClick}>{children}</span>;
}

ClickToCopy.propTypes = {
  /**
   * Text to copy
   */
  text: PropTypes.string.isRequired,
  /**
   * Target of the click event
   */
  children: PropTypes.element.isRequired,
  /**
   * Success Callback
   */
  onSuccess: PropTypes.func,
  /**
   * Error Callback
   */
  onError: PropTypes.func,
  /**
   * Wrapper style
   */
  style: PropTypes.object,
}

ClickToCopy.defaultProps = {
  text: '',
  children: 'Copy',
};

export default ClickToCopy
