const InnerList = (eachContent) => {
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
};

export default InnerList;
