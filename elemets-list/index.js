const seriesDatabase = [
    { nome: "The Boys", dataEstreia: 2019 },
    { nome: "The Ambrella Academy", dataEstreia: 2019 },
    { nome: "Invincible", dataEstreia: 2021 },
];

//TRADICIONAL
function findSeriesByName(seriesName) {
    for (let i = 0; i < seriesDatabase.length; i++) {
        if (seriesDatabase[i].nome === seriesName) {
            return seriesDatabase[i];
        }
    }
}

console.log(findSeriesByName("Invincible"));

const serie = seriesDatabase.find((serie) => serie.nome === "Invincible");

console.log(serie);