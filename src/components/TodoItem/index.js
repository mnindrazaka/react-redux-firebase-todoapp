import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styles from './styles'

export default class TodoItem extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div>
          <p>{this.props.text}</p>
          <p style={styles.todoTime}>{this.props.time}</p>
        </div>
        <button
          style={styles.todoButton}
          onMouseDown={this.props.onButtonPress}>
          Finish
        </button>
      </div>
    );
  }
}

TodoItem.propTypes = {
  text: PropTypes.string,
  time: PropTypes.string,
  onButtonPress: PropTypes.func,
}