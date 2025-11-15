const personne = {
    nom: "fatihi",
    age: 23,
    adresse: {rue: 14, ville: "casa"}
}

const nom = personne.nom
const age = personne.age
const rue = personne.adresse.rue
const ville = personne.adresse.ville

console.log(nom, age, rue, ville)


// const {nom, age, adresse: {rue}, adresse: {ville}} = personne

// console.log(nom, age, ville, rue)