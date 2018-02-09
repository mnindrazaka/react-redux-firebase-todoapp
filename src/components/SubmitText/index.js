import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styles from './styles'

export default class SubmitText extends Component {
  render() {
    return (
      <div style={styles.container}>
        <input
          style={styles.textInput}
          type={'text'}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.onChange}/>
        <input
          type="button"
          style={styles.submitButton}
          value={this.props.buttonLabel}
          onMouseDown={this.props.onSubmit}/>
      </div>
    );
  }
}

SubmitText.propTypes = {
  placeholder: PropTypes.string,
  buttonLabel: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
}