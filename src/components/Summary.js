const Summary = (data, article) => {
  return `
    <summary>
        ${data.indexOf(article) + 1}주차 과제 요구사항 및 구현물 ⬇
    </summary>
    `;
};

export default Summary;
