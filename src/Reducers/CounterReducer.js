const initState = {
  counter: 0,
};

const CounterReducer = (state = initState, action) => {
  switch (action.type) {
    case "PLUS":
      return {
        counter: (state.counter += 1),
      };
      case "MINUS":
        return {
          counter: (state.counter -= 1),
        };

    default:
      return state;
  }
};

export default CounterReducer;
