import Components from "../core/Component.js";
import {
  store,
  increaseYear,
  increaseMonth,
  decreaseYear,
  decreaseMonth,
} from "../store.js";

export default class changer extends Components {
  setEvent() {
    super.addEvent("click", ".left-year-btn", () => {
      store.dispatch(decreaseYear());
    });
    super.addEvent("click", ".right-year-btn", () => {
      store.dispatch(increaseYear());
    });
    super.addEvent("click", ".left-month-btn", () => {
      store.dispatch(decreaseMonth());
    });
    super.addEvent("click", ".right-month-btn", () => {
      store.dispatch(increaseMonth());
    });
  }

  template() {
    const style = `
      <style>
        .main-title {
            font-family: var(--title-font-family);
            font-size: 70px;
            margin-bottom: 40px;
        }

        .year-container,
        .month-container {
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        .month-container {
            margin-bottom: 20px;
          }

        button {
            border: none;
            border-radius: 10px;
            background-color: transparent;
            font-size: 30px;
            color: var(--point-skyblue-color);
        }

        .year {
            font-size: 50px
        }

        .month {
            font-size: 40px;
          }
      </style>
    `;

    const html = `
        <h1 class="main-title">Simple Calendar</h1>
        <div class="year-container">
            <button class="left-year-btn"><</button>
            <h2 class="year">${store.getState().year}</h2>
            <button class="right-year-btn">></button>
        </div>
        <div class="month-container">
            <button class="left-month-btn"><</button>
            <h2 class="month">${store.getState().month + 1}</h2>
            <button class="right-month-btn">></button>
        </div>
        `;

    return style + html;
  }
}
