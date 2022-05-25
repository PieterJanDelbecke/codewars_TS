let hotels = [
    {id: 1, hotel: "one"},
    {id: 2, hotel: "two"},
    {id: 3, hotel: "three"}
]

let chosenHotel = hotels.filter(hotel => hotel.id === 2)
console.log(chosenHotel[0])