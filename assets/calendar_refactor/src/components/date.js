import Components from "../core/Component.js";
import { store } from "../store.js";

export default class date extends Components {
  template() {
    const lastDateOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const getLastDateOfMonth = (month) => {
      const year = store.getState().year;
      if (month === 1) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
          return 29;
        }
      }
      return lastDateOfMonth[month];
    };

    const setDateInstance = () => {
      const dateInstance = new Date();
      dateInstance.setFullYear(store.getState().year);
      dateInstance.setMonth(store.getState().month);
      dateInstance.setDate(store.getState().date);

      return dateInstance;
    };

    const getPreDate = () => {
      const dateInstance = setDateInstance();
      dateInstance.setDate(1);
      const firstDay = dateInstance.getDay();
      const currentMonth = store.getState().month;
      const preMonth = currentMonth === 1 ? 11 : currentMonth - 1;
      const lastDateOfPreMonth = getLastDateOfMonth(preMonth);
      let dateList = [];

      for (let i = firstDay - 1; i >= 0; i--) {
        dateList.push(lastDateOfPreMonth - i);
      }
      return dateList;
    };

    const getCurrentDate = () => {
      const currentMonth = store.getState().month;
      let dateList = [];
      for (let i = 1; i <= getLastDateOfMonth(currentMonth); i++) {
        dateList.push(i);
      }
      return dateList;
    };

    const getPostDate = () => {
      const dateInstance = setDateInstance();
      const currentMonth = store.getState().month;
      const lastDateOfCurrentMonth = getLastDateOfMonth(currentMonth);
      dateInstance.setMonth(currentMonth);
      dateInstance.setDate(lastDateOfCurrentMonth);
      const lastDay = dateInstance.getDay();
      let dateList = [];

      for (let i = 1; i <= 6 - lastDay; i++) {
        dateList.push(i);
      }
      return dateList;
    };

    const style = `
        <style>
            li:nth-child(7n + 2) {
                color: var(--sunday-red-color);
                }
            
                .pre-date {
                    color: var(--not-current-date-color);
                }

                .post-date {
                    color: var(--not-current-date-color);
                }

                .seq${store.getState().date} {
                  ${
                    store.getState().year === new Date().getFullYear() &&
                    store.getState().month === new Date().getMonth()
                      ? "color: var(--point-skyblue-color);"
                      : ";"
                  }
                }
        </style>
    `;

    const html = `
            ${getPreDate()
              .map((date) => `<li class="pre-date">${date}</li>`)
              .join("")}
            ${getCurrentDate()
              .map((date) => `<li class="current-date seq${date}">${date}</li>`)
              .join("")} 
            ${getPostDate()
              .map((date) => `<li class="post-date">${date}</li>`)
              .join("")} 
        `;

    return style + html;
  }
}
