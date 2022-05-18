const FW = [
    {film: 'film1', price: 28},
    {film: 'film2', price: 25},
    {film: 'film3', price: 30},
]

const CW = [
    {film: 'film1', price: 30},
    {film: 'film2', price: 21},
    {film: 'film3', price: 35},
]


let arr = []

FW.forEach((movie, index) => {
    arr.push({film: movie.film, priceFW: movie.price, priceCW: CW[index].price})
})

console.log(arr)


