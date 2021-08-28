const yearContainer = document.querySelector(".year");
const monthContainer = document.querySelector(".month");
const dateContainer = document.querySelector(".date-list");
const leftMonthBtn = document.querySelector(".left-month_btn");
const rightMonthBtn = document.querySelector(".right-month_btn");
const leftYearBtn = document.querySelector(".left-year-btn");
const rightYearBtn = document.querySelector(".right-year-btn");

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
  let firstDay = dateInstance.getDay();
  let pastMonth;
  if (month === 0) {
    pastMonth = 11;
  } else {
    pastMonth = month - 1;
  }
  for (let i = 0; i < firstDay; i++) {
    const pastDate = document.createElement("li");
    pastDate.style.color = "grey";
    pastDate.innerText = lastDateOfMonth[pastMonth] - firstDay + 1 + i;
    dateContainer.appendChild(pastDate);
  }
  const lastDate = lastDateOfMonth[month];
  for (let i = 1; i <= lastDate; i++) {
    const presentDate = document.createElement("li");
    presentDate.innerText = i;
    presentDate.className = i;
    dateContainer.appendChild(presentDate);
  }
  dateInstance.setDate(lastDate);
  const lastDay = dateInstance.getDay();
  for (let i = 1; i < 7 - lastDay; i++) {
    const futureDate = document.createElement("li");
    futureDate.innerText = i;
    futureDate.style.color = "grey";
    dateContainer.appendChild(futureDate);
  }
};

const setBtnListeners = () => {
  leftMonthBtn.addEventListener("click", () => {
    if (month === 0) {
      month = 11;
      year -= 1;
      dateInstance.setFullYear(year);
    } else {
      month -= 1;
    }
    dateInstance.setMonth(month, 1);
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
    dateInstance.setMonth(month, 1);
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
};

const paintToday = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  if (currentYear === year && currentMonth === month) {
    const today = document.getElementsByClassName(date);
    today[0].style.color = "#09cefc";
  }
};

const clearCalendar = () => {
  yearContainer.innerHTML = "";
  monthContainer.innerHTML = "";
  dateContainer.innerHTML = "";
};

const init = () => {
  clearCalendar();
  drawDateTemplate();
  setCurrentDate();
  paintToday();
};

init();
setBtnListeners();
