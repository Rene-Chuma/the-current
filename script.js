const cards = document.querySelectorAll(".card, .card-text, .fg-3");
const dateParagraphs = document.querySelectorAll("#date");
const searchBar = document.querySelector("form");
const searchInput = document.querySelector(".form-control");
console.log(searchBar);
console.log(dateParagraphs);
console.log(cards);
console.log(searchInput);
cards.forEach((card) => {
  card.addEventListener("mouseover", changeColour);

  function changeColour() {
    console.log("working");
    card.classList.add("bg-dark");
    card.querySelectorAll(".card-title, .card-text, .fg-3").forEach((card) => {
      card.classList.remove("text-dark");
      card.classList.add("text-light");
    });
  }
  card.addEventListener("mouseout", resetColour);
  function resetColour() {
    card.classList.remove("bg-dark");
    card.querySelectorAll(".card-title, .card-text, .fg-3").forEach((card) => {
      card.classList.remove("text-light");
      card.classList.add("text-dark");
    });
  }
});
dateParagraphs.forEach((paragraph) => {
  paragraph.textContent = new Date().toLocaleDateString("en-GB");
});
searchBar.addEventListener("keyup", search);
function search(e) {
  const currentValue = e.target.value.toUpperCase();
  console.log(currentValue);
  let cardTitles = document.querySelectorAll("h5.card-title");
  cardTitles.forEach((title) => {
    if (title.textContent.includes(currentValue)) {
      title.parentNode.parentNode.style.display = "block";
    } else {
      title.parentNode.parentNode.style.display = "none";
    }
  });
}

window.addEventListener("load", hideSpinner);
function hideSpinner() {
  document.querySelector(".spinner-border").style.display = "none";
}
