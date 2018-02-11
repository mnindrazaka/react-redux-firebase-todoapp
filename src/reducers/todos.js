const todos = (state = [], action) => {
  switch (action.type) {
    case 'SET_TODO': {
      return action.payload
    }
    default: {
      return state
    }
  }
}

export default todos