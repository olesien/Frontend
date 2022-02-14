const { CollectionBase } = require("bookshelf");
// const PokemonCards = require("./Titles");
// const PokemonFriends = require("./pokemonFriends");
const Titles = require("./titles");
const Authors = require("./authors");

Titles.fetchAll().then((collection) => {
    console.log(collection.toJSON());
});

Authors.fetchAll().then((collection) => {
    console.log(collection.toJSON());
});

// PokemonCards.fetchAll().then((collection) => {
//     console.log(collection.toJSON());
// });

// PokemonFriends.fetchAll().then((collection) => {
//     console.log(collection.toJSON());
// });

// PokemonCards.count().then((collection) => {
//     console.log(collection);
// });

// // PokemonCards.where("id", 6)
// //     .fetch()
// //     .then((collection) => {
// //         console.log(collection.toJSON());
// //     });

// PokemonCards.where({ hp: 100 })
//     .fetchAll()
//     .then((collection) => {
//         console.log(collection.toJSON());
//     });

// // const attribute = { name: "Skrelp", hp: 50 };

// // let Skrelp = new PokemonCards(attribute);

// // Skrelp.save().then((res) => {
// //     console.log(res);
// // });

// // const attribute = { name: "Eric", mail: "eric@gmail.com" };

// // let Person = new PokemonFriends(attribute);

// // Person.save().then((res) => {
// //     console.log(res);
// // });

// //destroy()
