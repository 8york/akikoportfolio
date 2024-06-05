let imageData = [
  {
    text: "project00 for General Assembly",
    image: "images/tictactoe.png",
    alt: "tictac",
    id: "one",
    url: "https://8york.github.io/bookish-fishstick/",
  },
  {
    text: "Project for front end vanilla JS",
    image: "images/halfasian.png",
    alt: "haJS",
    id: "two",
    url: "https://tourmaline-druid-efbeec.netlify.app/ha1/",
  },
  {
    text: "Project 04 for General Assembly",
    image: "images/haha.png",
    alt: "halfasian with gatsby",
    id: "three",
    url: "#",
  },
  {
    text: "Ruby on Rails project for General Assembly",
    image: "images/img.png",
    alt: "ROR",
    id: "four",
    url: "#",
  },
  {
    text: "Websie with Wix",
    image: "images/marisa.png",
    alt: "marisa",
    id: "five",
    url: "https://www.marisahoward-psychotherapy.com/",
  },
];

const links = document.querySelectorAll(".imgs a");
const imageContainer = document.querySelector(".image-container");
const defaultImg = document.querySelector(".image-container h3");
const secondHTwo = document.querySelector("#h2");
//render respectable image by matching id of li and id in imageData

const imagegeUpdate = (e) => {
  e.preventDefault();
  const linkId = e.currentTarget.parentElement.id;
  const imageItem = imageData.find((item) => item.id === linkId);
  if (imageItem) {
    console.log(`image is ${linkId}`);
    const newImage = document.createElement("img");
    newImage.src = imageItem.image;
    newImage.alt = imageItem.alt;
    newImage.id = "images";
    newImage.classList.remove("fade-in");

    const newLink = document.createElement("a");
    newLink.href = imageItem.url;
    newLink.target = "_blank";
    newLink.appendChild(newImage);

    imageContainer.innerHTML = "";
    imageContainer.appendChild(newLink);
    // secondHTwo.classList.add("text-none");

    secondHTwo.style.display = "none";
    setTimeout(() => {
      newImage.classList.add("fade-in");
      // not working
      newImage.classList.add("enlarge");
    }, 50);
  }
};

links.forEach((link) => {
  link.addEventListener("mouseover", imagegeUpdate);
});
