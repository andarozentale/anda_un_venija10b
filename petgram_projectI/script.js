
const petPromise = await fetch("https://learnwebcode.github.io/pet-adoption-data/pets.json");
const pets = await petPromise.json();

const template = document.querySelector("#animal-card");
const animalsContainer = document.querySelector(".animals");

const nosaukumi = [
  "Lulu",
  "Makss",
  "Lote",
  "Bobijs",
  "Roksijs",
  "Kallija",
  "Klaudija",
  "Mailo",
  "Tims"
];

const apraksti = [
  "Lulu ir jauks un aktīvs suns, kura dievina pastaigas.",
  "Makss ir draudzīgs un enerģisks suns, kurš mīl bērnus.",
  "Lote ir mierīga kaķene, kas meklē siltu māju.",
  "Bobijs ir rotaļīgs kucēns, kas dievina uzmanību.",
  "Roksijs ir balts kā sniegs! Spēs iepriecināt jebkuru.",
  "Kallija gaida savas mūža mājas! Miermīlīga un aktīva.",
  "Klaudija ir aktīvākais kaķis pie mums līdz šim!",
  "Mailo patīk ceļot un meklē savu cilvēku.",
  "Tims gaida kādu, kas viņu baros visu dienu."
];

const pogasTeksts = [
  "Adoptēt Lulu",
  "Adoptēt Maksu",
  "Adoptēt Loti",
  "Adoptēt Bobiju",
  "Adoptēt Roksiju",
  "Adoptēt Kalliju",
  "Adoptēt Klaudiju",
  "Adoptēt Mailo",
  "Adoptēt Timu"
];

function renderPets(filteredPets) {
  animalsContainer.innerHTML = "";
  filteredPets.forEach((pet, index) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector(".animal-name").textContent = nosaukumi[index] || pet.name;
    clone.querySelector(".description").textContent = apraksti[index] || "Šis mīlulis meklē jaunas mājas!";
    clone.querySelector(".animal-photo").src = pet.photo;
    clone.querySelector("small").textContent = pet.species;
    const imgEl = clone.querySelector("img");
  if (imgEl) {
    imgEl.src = pet.photo;
    imgEl.alt = "Foto: " + pet.name;
  }
    clone.querySelector(".species").textContent = pet.species === "dog" ? "Suns" : pet.species === "cat" ? "Kaķis" : "Cits";
    clone.querySelector(".primary-button").textContent = pogasTeksts[index] || "Adoptēt";
    animalsContainer.appendChild(clone);
  });
}

function filtrētDzīvniekus(tips) {
  if (tips === "all") {
    renderPets(pets);
  } else {
    const filtrētie = pets.filter(pet => pet.species === tips);
    renderPets(filtrētie);
  }
}

document.querySelectorAll(".filter-buttons button").forEach(button => {
  button.addEventListener("click", () => {
    const filterType = button.getAttribute("data-filter");
    filtrētDzīvniekus(filterType);
  });
});

renderPets(pets);