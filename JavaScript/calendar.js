const yearContainer = document.querySelector(".year");
const monthContainer = document.querySelector(".month");
const dateContainer = document.querySelector(".date");

const dateInstance = new Date();

let year = dateInstance.getFullYear();
let month = dateInstance.getMonth() + 1;
let date = dateInstance.getDate();

let dateArray = [];

for (let i = 1; i < 32; i++) {
  dateArray.push(i);
}
