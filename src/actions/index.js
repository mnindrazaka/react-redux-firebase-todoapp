import firebase from '../config/firebase'

export const addTodo = (todo) => ({
  type: 'ADD_TODO',
  payload: todo
})

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
          todos.map((todo) => {
            dispatch(addTodo(todo))
          })
        }, 0)
      })
  }
}