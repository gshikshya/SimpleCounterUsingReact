import React, { useReducer } from 'react';

// const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return 0;
    default:
      return state;
  }
};

function Counter() {
  const [count, dispatchFunction] = useReducer(reducer, 0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatchFunction('increment')}>Increment</button>
      <button onClick={() => dispatchFunction('decrement')}>Decrement</button>
      <button onClick={() => dispatchFunction('reset')}>Reset</button>
    </div>
  );
}

export default Counter;
