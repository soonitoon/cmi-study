const yearContainer = document.querySelector(".year");
const monthContainer = document.querySelector(".month");
const dateContainer = document.querySelector(".date_list");

const dateInstance = new Date();

let year = dateInstance.getFullYear();
let month = dateInstance.getMonth() + 1;
let date = dateInstance.getDate();

const setCurrentDate = () => {
  yearContainer.innerText = year;
  monthContainer.innerText = month;
};

const drawDateTemplate = () => {
  for (let i = 1; i < 32; i++) {
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
