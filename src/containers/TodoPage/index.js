import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchTodos, sendTodo, deleteTodo} from '../../actions'

import SubmitText from '../../components/SubmitText'
import TodoItem from '../../components/TodoItem'
import styles from './styles'

class TodoPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  onChange = (event) => {
    const text = event.target.value
    this.setState({text})
  }

  onSubmit = () => {
    this.props.dispatch(sendTodo(this.state.text))
    this.setState({text: ''})
  }

  deleteTodo = (id) => {
    this.props.dispatch(deleteTodo(id))
  }

  render() {
    this.props.dispatch(fetchTodos())
    return (
      <div style={styles.container}>
        <SubmitText
          placeholder={'What you want to do ?'}
          buttonLabel={'Submit'}
          value={this.state.text}
          onChange={this.onChange}
          onSubmit={this.onSubmit}/>

        {this.props.todos.map(todo => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            time={todo.created_at}
            onButtonPress={() => this.deleteTodo(todo.id)}/>
        ))}

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos
})

export default connect(mapStateToProps) (TodoPage)