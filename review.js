const FW = [
    {title: "film1", price: 40},
    {title: "film2", price: 20},
    {title: "film3", price: 15},
]

const CW = [
    {title: "film3", price: 18},
    {title: "film1", price: 35},
    {title: "film2", price: 25},
]

films = []

for (const [key, value] of Object.entries(FW)){
    films.push({
        title: value.title,
        priceFW: value.price,
        priceCW: CW[key].price
    })
}

// FW.forEach((film) => {
//     films.push({
//         title: film.title,
//         priceFW: film.price,
//         priceCW: CW[film.title].price
//     })
// })

console.log(films)