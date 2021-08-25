const yearContainer = document.querySelector(".year");
const monthContainer = document.querySelector(".month");
const dateContainer = document.querySelector(".date_list");

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
  const lastDate = lastDateOfMonth[month];
  for (let i = 1; i <= lastDate; i++) {
    const eachDate = document.createElement("li");
    eachDate.innerText = i;
    dateContainer.appendChild(eachDate);
  }
};

const init = () => {
  drawDateTemplate();
  setCurrentDate();
};

init();
