const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      if(state.map(todo => todo.id).includes(action.payload.id)) {
        return state
      } else {
        return [
          ...state,
          action.payload
        ]
      }
    }

    case 'DELETE_TODO': {
      let data = []

      state.forEach((item) => {
        if(item.id !== action.payload.id) {
          data.push(item)
        }
      })

      return data
    }
    default: {
      return state
    }
  }
}

export default todos