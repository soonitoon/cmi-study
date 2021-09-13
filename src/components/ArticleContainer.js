import Article from "./Article.js";

const ArticleContainer = (data) => {
  return `
    <main>
      ${data.map((article) => `${Article(data, article)}`).join("")}
    </main>
  `;
};

export default ArticleContainer;
