let githubData = [
  {
    title: "Tic-Tac-Toe",
    description: "A simple Tic-Tac-Toe game written with Vanilla JavaScript",
    id: "one",
    url: "https://github.com/8york/bookish-fishstick",
  },
  {
    title: "HalfAsian",
    description:
      "Vanill JavaScript project to build a static front-end website",
    id: "two",
    url: "https://github.com/8york/FEWDR-final-project-akiko",
  },
  {
    title: "HalfAsian 2",
    description: "Another Halfasian website using React framework, Gatsby ",
    id: "three",
    url: "https://github.com/8york/halfasians",
  },
  {
    title: "CollectArt",
    description:
      "A Ruby on Rails project which was part of the General Assembly course. Collectart is a site to share artworks aiming to connect people through the love of visual art",
    id: "four",
    url: "https://github.com/8york/collectart",
  },
  {
    title: "daily Magic",
    description:
      "bult with React, this is a 'fortune teller' site featuring magic 8 ball",
    id: "five",
    url: "#",
  },
  {
    title: "portfoli",
    description: "github for this website built with vanilla JavaScript",
    id: "six",
    url: "#",
  },
];

const wrapper = document.querySelector(".gh-container");

const changeTextColour = function (e) {
  const atag = e.currentTarget.querySelector("a");
  atag.classList.add("change-colour");
  // console.log("Added change-colour class:", atag.classList);
};

const revertTextColour = function (e) {
  const atag = e.currentTarget.querySelector("a");
  atag.classList.remove("change-colour");
  // console.log("Added change-colour class:", atag.classList);
};
// const links = document.querySelectorAll(".repos a");

const renderBtns = () => {
  githubData.forEach((repo) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const button = document.createElement("button");
    button.classList.add("repos");

    const link = document.createElement("a");
    link.href = repo.url;
    link.textContent = repo.title;
    // link.classList.add(repo.id);

    button.appendChild(link);
    card.appendChild(button);

    const description = document.createElement("p");
    description.textContent = repo.description;
    card.appendChild(description);

    wrapper.appendChild(card);
    button.addEventListener("mouseover", changeTextColour);
    button.addEventListener("mouseout", revertTextColour);
    button.addEventListener("touchstart", changeTextColour);
    button.addEventListener("touchend", revertTextColour);
  });
};

renderBtns();

// btns.forEach((btn) => {

// });
