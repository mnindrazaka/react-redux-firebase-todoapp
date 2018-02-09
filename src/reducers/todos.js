const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      return [
        ...state,
        action.payload
      ]
    }
    case 'DELETE_TODO': {
      let data = []
      state.map((item) => {
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