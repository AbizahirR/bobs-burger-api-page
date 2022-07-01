import { getData } from "./services/getData.js";

const main = document.querySelector(".characters-counter");
const charactersContainer = document.querySelector(".characters");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let characters = [];
let skipCounter = 0;
let charsPerPage = 12;

prev.addEventListener("click", () => {
    if (skipCounter >= charsPerPage) {
        // charactersContainer.innerHTML = "";
        skipCounter -= charsPerPage;
        getData(skipCounter, charsPerPage).then(characters => fillCharacters(characters));
    }
});

next.addEventListener("click", () => {
    // charactersContainer.innerHTML = "";
    skipCounter += charsPerPage;
    getData(skipCounter, charsPerPage).then(characters => fillCharacters(characters));
});

getData(skipCounter, charsPerPage).then(data => {
    characters = [...data];
    fillCharacters(characters);
})

const fillCharacters = (characters) => {
    
    // main.innerHTML = `<p>Showing ${skipCounter+charsPerPage} of 500 characters</p>`
    charactersContainer.innerHTML = `<p class="counter">Showing ${skipCounter+charsPerPage} of 506 characters</p>`

    characters.forEach((character) => {
        let element = document.createElement("a");
        element.setAttribute("href", `${character.wikiUrl}`);
        element.setAttribute("target", "_blank");
        element.classList.add("character-container")

        element.innerHTML = `
            <img class="character-img" src="${character.image}" alt="${character.name}">
            <h2 class="character-name"><b>Name:</b> ${character.name || "unknown"}</h2>
            <hr>
            <p class="character-gender"><b>Gender:</b> ${character.gender || "unknown"}</p>
            <p class="character-hair"><b>Hair:</b> ${character.hairColor || "unknown"}</p>
            <p class="character-occupation"><b>Occupation:</b> ${character.occupation || "unknown"}</p>
            `

        charactersContainer.appendChild(element);
    })
}
