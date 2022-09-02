/**
 * 3.1. Skapa klassen Character nedan enligt följande specifikation: [6p]
 *
 * - Måste ha ett name vid skapandet.
 * - Ska kunna ange height, weight och gender vid skapandet.
 * - Ska ha metoden getInfo() som returnerar en sträng med namn, längd, vikt och kön på karaktären.
 *
 */

class Character {
    constructor(
        name,
        height = undefined,
        weight = undefined,
        gender = undefined
    ) {
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.gender = gender;
    }
    getInfo() {
        return {
            name: this.name,
            height: this.height,
            weight: this.weight,
            gender: this.gender,
        };
    }
}

const easterBunny = new Character("Easter Bunny", "10M", "1000KG");
console.log(easterBunny.getInfo());
