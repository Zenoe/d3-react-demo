const Reducer = (state, action) => {
  switch (action.type) {
      case 'SET_USERNAME':
      return {
        ...state,
        userName: action.payload
      }

    default:
      return state;
  }
};

export default Reducer;
