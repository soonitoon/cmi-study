const yearContainer = document.querySelector(".year");
const monthContainer = document.querySelector(".month");
const dateContainer = document.querySelector(".date_list");
const leftMonthBtn = document.querySelector(".left_month_btn");
const rightMonthBtn = document.querySelector(".right_month_btn");
const leftYearBtn = document.querySelector(".left_year_btn");
const rightYearBtn = document.querySelector(".right_year_btn");

const dateInstance = new Date();

const lastDateOfMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let year = dateInstance.getFullYear();
let month = dateInstance.getMonth();
let date = dateInstance.getDate();

const setCurrentDate = () => {
  yearContainer.innerText = year;
  monthContainer.innerText = month + 1;
};

const drawDateTemplate = () => {
  dateInstance.setDate(1);
  let day = dateInstance.getDay();
  if (day === 0) {
    day = 7;
  }
  for (let i = 0; i < day - 1; i++) {
    const emptyLi = document.createElement("li");
    dateContainer.appendChild(emptyLi);
  }
  const lastDate = lastDateOfMonth[month];
  for (let i = 1; i <= lastDate; i++) {
    const eachDate = document.createElement("li");
    eachDate.innerText = i;
    dateContainer.appendChild(eachDate);
  }
};

leftMonthBtn.addEventListener("click", () => {
  if (month === 0) {
    month = 11;
    year -= 1;
    dateInstance.setFullYear(year);
  } else {
    month -= 1;
  }
  dateInstance.setMonth(month);
  init();
});

rightMonthBtn.addEventListener("click", () => {
  if (month === 11) {
    month = 0;
    year += 1;
    dateInstance.setFullYear(year);
  } else {
    month += 1;
  }
  dateInstance.setMonth(month);
  init();
});

leftYearBtn.addEventListener("click", () => {
  if (year === 0) {
    year = 0;
  } else {
    year -= 1;
  }
  dateInstance.setFullYear(year);
  init();
});

rightYearBtn.addEventListener("click", () => {
  year += 1;
  dateInstance.setFullYear(year);
  init();
});

const init = () => {
  drawDateTemplate();
  setCurrentDate();
};

init();
