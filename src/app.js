import calendarData from "./data/calendar.js";
import calendarRefactorData from "./data/calendar_refactor.js";

const data = [calendarData, calendarRefactorData];
const $app = document.querySelector("#app");

const template = () => {
  const html = data
    .map((article) => {
      return `
            <article>
            <h2>${data.indexOf(article) + 1}주차 과제: ${article.title}</h2>
            <details>
            <summary>${
              data.indexOf(article) + 1
            }주차 과제 요구사항 및 구현물 ⬇</summary>
                <section>
                    ${article.stackBadges
                      .map((badge) => {
                        return `
                            <figure>
                                <img src="${badge.url}" alt="${badge.alt}">
                            </figure>
                        `;
                      })
                      .join("")}
                </section>
                <section>
                <ul>
                    ${article.contents
                      .map((eachContent) => {
                        return `
                            <li>
                               <p>${eachContent.title}</p>
                               <ul>
                               ${
                                 eachContent.content
                                   ? eachContent.content
                                       .map((text) => {
                                         return `
                                            <li>${text}</li>
                                        `;
                                       })
                                       .join("")
                                   : ""
                               }
                               </ul>
                            </li>
                        `;
                      })
                      .join("")}
                </section>
            </article>
            </details>
        `;
    })
    .join("");

  return html;
};

const render = () => {
  $app.innerHTML = template();
};

render();
