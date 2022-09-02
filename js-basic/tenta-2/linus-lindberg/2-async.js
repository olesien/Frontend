/**
 * 2. Async
 *
 * Alla funktioner finns definierade och ska färdigställas i den här filen.
 *
 */

/**
 * 2.1. Funktionen btnSurpriseMe ska 1,5 sekund efter att den kallats på
 * visa en en alert-ruta med texten "Surprise!". [2p]
 *
 */

const btnSurpriseMe = () => {
    // Ändra endast här
    setTimeout(() => alert("Surprise!"), 1500);
};

/**
 * 2.2. Skriv den asynkrona funktionen `getJson(url)` som ska göra en
 * HTTP GET-förfrågan till adressen i parametern `url`, tolka svaret
 * som JSON och returnera den tolkade datan. [4p]
 *
 * Du ska kalla den här funktionen i uppgift 2.3.
 *
 * Du kan antingen använda Promises här eller async/await, det är upp till dig
 * vilket du känner dig mest bekväm med.
 *
 */

const getJson = async (url) => {
    //Make a request for the given url
    const response = await fetch(url);
    // waits until the request completes...
    return response.json();
};

/**
 * 2.3. Med hjälp av funktionen från förra uppgiften ska du nu skriva kod för
 * att hämta ut data från SWAPI (The Star Wars API) https://swapi.dev/. [3p]
 *
 * Endpoint:en du ska hämta från är https://swapi.dev/api/people/1/ och du ska
 * skriva ut namnet på personen till DOM-elementet med id "answer-2-3".
 *
 */

// Skriv din kod här
const lukeEl = document.querySelector("#answer-2-3");
const getLuke = async () => {
    //Use the function above to make a request for luke's data
    const data = await getJson("https://swapi.dev/api/people/1/");
    //Add to website
    lukeEl.innerText = data.name;
};

getLuke();
/**
 * 2.4. Med hjälp av funktionen från uppgift 2.2, skriv kod som hämtar data
 * från https://swapi.dev/api/people/3/ och utifrån det svaret anropar den URL
 * som finns i egenskapen `homeworld`. Anropa denna URL, och i det svaret finns
 * en egenskapen `name` vars värde du ska skriva ut till DOM-elementet med ID
 * `answer-2-4`. [6p]
 *
 */

// Skriv din kod här

const R2D2El = document.querySelector("#answer-2-4");
const getR2D2 = async () => {
    //Make a request for R2D2
    const R2D2 = await getJson("https://swapi.dev/api/people/3");
    //Use the home world URL from above request to make a new request, for the world itself
    const data = await getJson(R2D2.homeworld);
    //Add it to the website
    R2D2El.innerText = data.name;
    console.log(R2D2);
};

getR2D2();
