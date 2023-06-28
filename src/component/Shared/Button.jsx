import PropTypes from 'prop-types'
import { version } from 'react-dom'

function Button({type ,isDisabled,version,children}) {
  return (
    <button type={type} Disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  )
}

Button.defaultProps = {
    version : 'primary',
    type : 'submit',
    isDisabled : false
}

Button.propTypes = {
    children : PropTypes.node.isRequired,
    type : PropTypes.string,
    version : PropTypes.string,
    isDisabled : PropTypes.bool.isRequired,
}

export default Button
