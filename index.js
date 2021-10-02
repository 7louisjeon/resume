const scrollLink = (btnQuery, targetQuery) => {
  const btn = document.querySelector(btnQuery);
  btn.addEventListener("click", () => {
    document.querySelector(targetQuery).scrollIntoView({ behavior: "smooth" });
  });
};

scrollLink("#root_btn", ":root");

const nav = ["morales", "travo", "boxmovies", "datafactory", "soylent"];

nav.forEach((item) => {
  scrollLink(`#${item}_btn`, `#${item}`);
});

const cardLink = (iconQuery, cardQuery) => {
  const icon = document.querySelector(iconQuery);
  const card = document.querySelector(cardQuery);
  icon.addEventListener("click", () => {
    card.classList.contains("on")
      ? card.classList.remove("on")
      : card.classList.add("on");
  });
};

const icons = ["html_css", "javascript", "react", "nodejs", "typescript"];

icons.forEach((icon) => {
  cardLink(`#${icon}_icon`, `#${icon}_card`);
});
