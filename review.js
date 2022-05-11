const grandparent = document.querySelector(".grandparent")
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")

const button = document.querySelector("#my-button")

grandparent.addEventListener('click', e => {
    console.log(e)
})

button.addEventListener('click', e=>{
    console.log(e)
})