const dzivnieki = [
  { name: "Lulu", age: "", species: "dog", photo: "https://dinozoopasaule.lv/uploads/files/Raksti/Bernes%20su%C5%86i/dino%20zoo%20bernes%20suni%20%281%29-min.jpg", desc: "Lulu ir draudzīga un rotaļīga sunīte, kura vienmēr ir gatava piedzīvojumiem. Viņa dievina garas pastaigas, skrējienus pa pļavu un spēles ar bumbiņu." },
  { name: "Minka", age: "", species: "cat", photo: "https://www.redzet.lv/images/large/3/25/D-105-14.jpg", desc: "Minka ir mierīga un mīļa kaķene, kura visvairāk novērtē siltu klēpi un klusus vakarus pie loga. Viņa ir ziņkārīga, bet vienlaikus ļoti maiga." },
  { name: "Bobs", age: "", species: "other", photo: "https://cdn.santa.lv/media/2023/04/7/large/a8d62d414944.jpg", desc: "Bobs ir draudzīgs un rotaļīgs trusis, kuram patīk sabiedrība un uzmanība. Viņš mīl grauzt burkānus un izstaipīties uz mīksta paklājiņa. Bobs ir ļoti tīrīgs un ātri pierod pie savas vides. Viņš ir piemērots gan bērniem, gan pieaugušajiem, kas vēlas maigu, bet aktīvu mājas mīluli." },
  {name: "Roksijs", age:"", species: "dog", photo: "https://site-1999131.mozfiles.com/files/1999131/medium/Rumi2_foto_Kristaps_Kalns__Dienas_mediji_copy-1.jpg", desc: "Roksijs ir enerģijas pilns suns ar lielu sirdi. Viņš ir aktīvs, draudzīgs un ļoti sabiedrisks. Roksijs mīl spēlēties, skriet un apgūt jaunus trikus. Viņš ir ideāls kompanjons cilvēkiem, kas dzīvo aktīvu dzīvesveidu un vēlas četrkājainu draugu piedzīvojumiem ikdienā."},
  { name: "Čipis", age: "", species: "other", photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Drops_futtert.jpg/250px-Drops_futtert.jpg", desc: "Čipis ļoti mīl izpētīt apkārtni, patīk grauzt tualetes papīra rullīšus un vākt sēkliņu krājumus. Čipis meklē mīlošus un atbildīgus saimniekus, kuri būs gatavi viņu iesaistīt rotaļās un nodrošināt drošu vidi.Čipis ir lielisks kompanjons un gatavs doties uz jaunām mājām, kur viņu gaida rūpes, uzmanība un daudz mīlestības!" },
  { name: "Rūdis", age: "", species: "cat", photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg", desc: "Rūdis ir ļoti zinātkārs un vienmēr gatavs rotaļām. Patīk kāpelēt, ķert aukliņas un gulēt saimniekam klēpī pēc garas spēļu dienas.Rūdis meklē enerģiskus saimniekus, kuriem patīk rotaļīgi kaķi un kuri ir gatavi ikdienas izklaidēm un bučām. Rūdis ir jauns, dzīvespriecīgs runcītis, kurš meklē mājas, kur viņa dzirkstošā daba tiks novērtēta. Viņš būs ne tikai mājdzīvnieks, bet arī īsts ģimenes draugs!" }
];

function raditKartites(lista) {
  const konteineris = document.querySelector(".animals");
  konteineris.innerHTML = "";

  lista.forEach(dz => {
    const sagatave = document.querySelector("#animal-card");
    const clone = sagatave.content.cloneNode(true);

    clone.querySelector("h3").textContent = dz.name;
    clone.querySelector(".description").textContent = dz.desc;
    clone.querySelector("img").src = dz.photo;

    let sugaLatviski = "";
    switch (dz.species) {
      case "dog":
        sugaLatviski = "Suns";
        break;
      case "cat":
        sugaLatviski = "Kaķis";
        break;
      default:
        sugaLatviski = "Cits";
    }
    clone.querySelector(".info").textContent = sugaLatviski;
    clone.querySelector(".primary-button").textContent = "Adoptēt " + dz.name;

    konteineris.appendChild(clone);
  });
}

document.querySelectorAll("[data-filter]").forEach(poga => {
  poga.addEventListener("click", () => {
    const filtrs = poga.getAttribute("data-filter");

    if (filtrs === "all") {
      raditKartites(dzivnieki);
    } else {
      const filtrētie = dzivnieki.filter(dz => dz.species === filtrs);
      raditKartites(filtrētie);
    }
  });
});

// Izmantojam while, lai konsolē parādītu dzīvnieku vārdus
let i = 0;
while (i < dzivnieki.length) {
  console.log("Dzīvnieks: " + dzivnieki[i].name);
  i++;
}