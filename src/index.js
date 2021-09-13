import calendarData from "./data/calendar.js";
import calendarReactData from "./data/calendar_react.js";
import calendarRefactorData from "./data/calendar_refactor.js";
import App from "./app.js";

const data = [calendarData, calendarRefactorData, calendarReactData];
const $app = document.querySelector("#app");

const render = () => {
  $app.innerHTML = App(data);
};

render();
