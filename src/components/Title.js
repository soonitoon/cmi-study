const Title = (data, article) => {
  return `
      <h2>
        ${data.indexOf(article) + 1}주차 과제: ${article.title}
      </h2>
    `;
};

export default Title;
