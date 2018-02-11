import firebase from '../config/firebase'

export const sendTodo = (text) => {
  return (dispatch) => {
    let todo = {
      text,
      created_at: new Date().toLocaleString()
    }

    const newTodoRef = firebase.database().ref('todos').push()
    todo.id = newTodoRef.key
    newTodoRef.set(todo)
  }
}

export const deleteTodo = (id) => {
  return (dispatch) => {
    firebase.database()
      .ref(`todos/${id}`)
      .remove()
  }
}

export const fetchTodos = () => {
  return (dispatch) => {
    firebase.database()
      .ref('todos')
      .on('value', (snapshot) => {
        setTimeout(() => {
          const data = snapshot.val() || []
          let todos = []

          Object.values(data).forEach((todo) => {
            todos.push(todo)
          })

          dispatch({
            type: 'SET_TODO',
            payload: todos
          })
        }, 0)
      })
  }
}