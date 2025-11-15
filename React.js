class Etudiant {
    constructor(nom, age) {
        this.nom = nom
        this.age = age
    }
    info() {
        return `Etudinat nom: ${this.nom} a pour age:${this.age}`
    }
}
let et1 = new Etudiant("ilias", 20);
let et2 = new Etudiant("ilyass", 21);
console.log(et1);
console.log(et2);

