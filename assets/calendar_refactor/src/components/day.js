import Components from "../core/Component.js";

export default class day extends Components {
  template() {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const style = `
      <style>
        li:nth-child(1) {
          color: var(--sunday-red-color);
          }
      </style>
    `;

    const html = `
             ${days.map((day) => `<li>${day}</li>`).join("")}
        `;

    return style + html;
  }
}
