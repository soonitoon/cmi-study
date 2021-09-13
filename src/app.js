import Header from "./components/Header.js";
import ArticleContainer from "./components/ArticleContainer.js";

const App = (data) => {
  return `
    <div class="markdown-body">
      ${Header()}
      ${ArticleContainer(data)}
    </div>
  `;
};

export default App;
