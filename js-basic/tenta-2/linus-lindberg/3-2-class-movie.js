/**
 * 3.2. Skapa klassen Movie nedan enligt följande specifikation: [9 p]
 *
 * - Måste ha ett name vid skapandet.
 * - Ska kunna ange runtime och release_year vid skapandet.
 * - Ska ha metoden addCharacter() som lägger till en karaktär i filmen.
 * - Ska ha metoden getCharactersInfo() som returnerar en array av strängar med alla karaktärers info.
 *
 */

class Movie {
    constructor(name, runtime = undefined, release_year = undefined) {
        this.name = name;
        this.runtime = runtime;
        this.release_year = release_year;
    }
    addCharacter(name) {
        //Check if characters has been defined already, if not make sure it's an array.
        if (!Array.isArray(this.characters)) {
            this.characters = [];
        }
        //Add the character name
        this.characters.push(name);
    }
    getCharactersInfo() {
        return this.characters;
    }
}

const the_incredibles = new Movie("The Incredibles", undefined, 2004);
console.log(the_incredibles);
the_incredibles.addCharacter("Syndrome");
console.log(the_incredibles.getCharactersInfo());
the_incredibles.addCharacter("Edna");
console.log(the_incredibles.getCharactersInfo());
