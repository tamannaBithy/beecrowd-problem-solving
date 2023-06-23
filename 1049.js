// for understand the problem need to go to the website cause the problem is based on an image

const animalData = {
  vertebrado: {
    ave: {
      carnivoro: "aguia",
      onivoro: "pomba",
    },
    mamifero: {
      onivoro: "homem",
      herbivoro: "vaca",
    },
  },

  invertebrado: {
    inseto: {
      hematofago: "pulga",
      herbivoro: "lagarta",
    },
    anelideo: {
      hematofago: "sanguessuga",
      onivoro: "minhoca",
    },
  },
};

const word1 = "vertebrado";
const word2 = "mamifero";
const word3 = "onivoro";

const animal = animalData[word1][word2][word3];

console.log(animal);