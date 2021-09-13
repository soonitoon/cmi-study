import Summary from "./Summary.js";
import BadgeContainer from "./BadgeContainer.js";
import MainContent from "./MainContent.js";

const Details = (data, article) => {
  return `
    <details>
      ${Summary(data, article)}
      ${BadgeContainer(article)}
      ${MainContent(article)}
    </details>
  `;
};

export default Details;
