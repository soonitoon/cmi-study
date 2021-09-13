const Badge = (badge) => {
  return `
    <figure>
      <img src="${badge.url}" alt="${badge.alt}">
    </figure>
  `;
};

export default Badge;
