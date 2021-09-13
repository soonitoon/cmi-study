import Badge from "./Badge.js";

const BadgeContainer = (article) => {
  return `
    <section>
      ${article.stackBadges.map((badge) => Badge(badge)).join("")}   
    </section> 
  `;
};

export default BadgeContainer;
