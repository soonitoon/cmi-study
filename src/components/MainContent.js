import InnerList from "./InnerList.js";

const MainContent = (article) => {
  return `
    <section>
      <ul>
        ${article.contents
          .map((eachContent) => InnerList(eachContent))
          .join("")}
      </ul>
    </section>
    `;
};

export default MainContent;
