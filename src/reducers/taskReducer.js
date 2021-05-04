const initialData = {
  taskItems : []
};

const taskReducer = (state = initialData, action) => {
  switch(action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        taskItems: [...state.taskItems, action.payload]
      }
    case 'DELETE_TASK':
      return {
        ...state,
        taskItems: [...state.taskItems.filter((task) => task !== action.payload)]
      }
    default: 
      return state;
  }
};

export default taskReducer;