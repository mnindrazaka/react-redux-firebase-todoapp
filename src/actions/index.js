import firebase from '../config/firebase'

export const addTodo = (todo) => ({
  type: 'ADD_TODO',
  payload: todo
})

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

export const deleteTodo = (id) => ({
  type: 'DELETE_TODO',
  payload: {
    id
  }
})

export const fetchTodos = () => {
  return (dispatch) => {
    firebase.database()
      .ref('todos')
      .on('value', (snapshot) => {
        setTimeout(() => {
          const todos = snapshot.val() || []
          Object.values(todos).forEach((todo) => {
            dispatch(addTodo(todo))
          })
        }, 0)
      })
  }
}