import { createStore } from "./core/Store.js";

const dateInstance = new Date();

const initState = {
  year: dateInstance.getFullYear(),
  month: dateInstance.getMonth(),
  date: dateInstance.getDate(),
};

export const INCREASE_YEAR = "INCREAS_YEAR";
export const DECREASE_YEAR = "DECREAS_YEAR";
export const INCREASE_MONTH = "INCREASE_MONTH";
export const DECREASE_MONTH = "DECREAS_MONTH";

const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case "INCREAS_YEAR":
      return { ...state, year: state.year + 1 };
    case "DECREAS_YEAR":
      return { ...state, year: state.year - 1 };
    case "INCREASE_MONTH":
      if (state.month === 11) {
        return { ...state, year: state.year + 1, month: 1 };
      }
      return { ...state, month: state.month + 1 };
    case "DECREAS_MONTH":
      if (state.month === 1) {
        if (state.year === 0) {
          return state;
        }
        return { ...state, year: state.year - 1, month: 11 };
      }
      return { ...state, month: state.month - 1 };
    default:
      return state;
  }
};

export const store = createStore(reducer);

export const increaseYear = () => ({
  type: INCREASE_YEAR,
});

export const decreaseYear = () => ({
  type: DECREASE_YEAR,
});

export const increaseMonth = () => ({
  type: INCREASE_MONTH,
});

export const decreaseMonth = () => ({
  type: DECREASE_MONTH,
});
