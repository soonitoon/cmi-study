import Title from "./Title.js";
import Details from "./Details.js";

const Article = (data, article) => {
  return `
    <article>
      ${Title(data, article)}
      ${Details(data, article)}
    </article>
  `;
};

export default Article;
