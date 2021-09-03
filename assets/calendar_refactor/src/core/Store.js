import { observable } from "./Observer.js";

export const createStore = (reducer) => {
  const state = observable(reducer());
  let frozenState = {};

  frozenState = new Proxy(frozenState, {
    get(target, property) {
      return state[property];
    },
  });

  const dispatch = (action) => {
    const newState = reducer(state, action);

    for (const [key, value] of Object.entries(newState)) {
      if (!state[key]) continue;
      state[key] = value;
    }
  };

  const getState = () => frozenState;
  return { getState, dispatch };
};
