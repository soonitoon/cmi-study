import Component from "./core/Component.js";
import changer from "./components/changer.js";
import day from "./components/day.js";
import date from "./components/date.js";

export default class App extends Component {
  template() {
    const resetStyle = `
        <style>
            html, body, div, span, applet, object, iframe,
            h1, h2, h3, h4, h5, h6, p, blockquote, pre,
            a, abbr, acronym, address, big, cite, code,
            del, dfn, em, img, ins, kbd, q, s, samp,
            small, strike, strong, sub, sup, tt, var,
            b, u, i, center,
            dl, dt, dd, ol, ul, li,
            fieldset, form, label, legend,
            table, caption, tbody, tfoot, thead, tr, th, td,
            article, aside, canvas, details, embed, 
            figure, figcaption, footer, header, hgroup, 
            menu, nav, output, ruby, section, summary,
            time, mark, audio, video {
                margin: 0;
                padding: 0;
                border: 0;
                font-size: 100%;
                font: inherit;
                vertical-align: baseline;
            }
            /* HTML5 display-role reset for older browsers */
            article, aside, details, figcaption, figure, 
            footer, header, hgroup, menu, nav, section {
                display: block;
            }
            body {
                line-height: 1;
            }
            ol, ul {
                list-style: none;
            }
            blockquote, q {
                quotes: none;
            }
            blockquote:before, blockquote:after,
            q:before, q:after {
                content: '';
                content: none;
            }
            table {
                border-collapse: collapse;
                border-spacing: 0;
            }
        </style>
    `;

    const style = `
        <style>
            @import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Roboto&display=swap");

            :root {
                --main-font-family: "Roboto", sans-serif;
                --title-font-family: "Dancing Script", cursive;
                --main-background-color: #0f111b;
                --main-font-color: white;
                --point-skyblue-color: #09cefc;
                --sunday-red-color: #ee3b50;
                --not-current-date-color: grey;
            }

            #app {
                font-family: var(--main-font-family);
                font-size: 25px;
                width: 100vw;
                height: 100vh;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                background-color: var(--main-background-color);
                color: var(--main-font-color);
            }

            header {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center; 
            }

            footer {
                font-size: 14px;
              }

            ul {
                display: grid;
                grid-template-columns: repeat(7, minmax(90px, auto));
                text-align: center;
            }

            .week-ul {
                margin-bottom: 30px;
                color: var(--point-skyblue-color);
              }

            .date-ul {
                grid-template-rows: repeat(6, minmax(60px, auto));
            }
        </style>
    `;

    const html = `
        <header data-component="changer"></header>
        <main> 
            <ul data-component="day" class="week-ul"></ul>
            <ul data-component="date" class="date-ul"></ul>
        </main>
        <footer>Hyuno Choi © ${new Date().getFullYear()}</footer>
       `;

    return resetStyle + style + html;
  }
  mounted() {
    const $changer = document.querySelector('[data-component="changer"]');
    const $day = document.querySelector('[data-component="day"]');
    const $date = document.querySelector('[data-component="date"]');

    new changer($changer);
    new day($day);
    new date($date);
  }
}
