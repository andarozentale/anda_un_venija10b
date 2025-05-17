

const petPromise = await fetch("https://learnwebcode.github.io/pet-adoption-data/pets.json")
const pets = await petPromise.json()

const template = document.querySelector("#animal-card")
const wrapper = document.createElement("div")

const pogasTeksts = [
    "Lulu",
    "Makss",
    "Lote",
    "Bobijs",
    "Roksijs",
    "Kallija",
    "Klaudija",
    "Mailo",
    "Tims"

]
const apraksti = [
    "Lulu ir jauks un aktīvs suns, kura dievina pastaigas.",
    "Minka ir ziņkārīga un mīļa kaķene, kura meklē mierīgas mājas.",
    "Mazais mīlulis dievinātu siltu un jauku ģimeni.",
    "Mierīgais vēl nav pieradis pie cilvēkiem, taču meklē savu īsto.",
    "Balts kā sniegs! Roksijs spēs iepriecināt jebkuru.",
    "Kallija gaida savas mūža mājas! Miermīlīga un aktīva.",
    "Klaudija ir aktīvākais kaķis pie mums līdz šim! Klaudija gaida savu īsto cilvēku, kurš būs tikpat aktīvs.",
    "Mailo patīk ceļot un meklē savu cilvēku, kurš dievina ceļot.",
    "Tims gaida kādu, kas viņu baros visu dienu. Tims ir iecienījis ēdienu!!"

]
const speciesLatviski = {
    dog:"Suns",
    cat:"Kaķis",
    rabbit:"Trusis",
    Bird: "Putns"
}


pets.forEach((pet, index) => {
    const clone = template.content.cloneNode(true)
    const suga = speciesLatviski[pet.species] || "Dzībnieks";

    clone.querySelector("h3").textContent = pogasTeksts[index] || "Mīlulis meklē mājas!"
    clone.querySelector(".description").textContent = apraksti[index] || "Dzīvnieciņs gaida jaunas mājas!"
    clone.querySelector(".species").textContent = suga;
    clone.querySelector("img").src = pet.photo
    clone.querySelector("img").alt = "Foto: " + pet.name
    clone.querySelector(".primary-button").textContent = pogasTeksts[index] 

 wrapper.appendChild(clone)
})


document.querySelector(".animals").appendChild(wrapper)
