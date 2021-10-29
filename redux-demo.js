const redux = require("redux");

const counterReducer = (state, action) => {
  return { counter: state.counter + 1 };
};
const redux = redux.createStore(counterReducer);
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber)
