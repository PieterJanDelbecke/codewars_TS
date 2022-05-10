function challengeOne() {

    let el = document.querySelector("#challenge-one")
    el.addEventListener('click', (event)=>{
        console.log("Hello World")
    })
    
    }
    
    function challengeTwo() {
        // let button = document.getElementById("#challenge-two")
        let button = document.getElementById("challenge-two")
        button.addEventListener('click', ()=> {
            let li = document.createElement("li")
            li.innerHTML = "New List Item"
            let ul = document.querySelector("ul")
            ul.appendChild(li)
        })
        
    }
    
    
    function challengeThree() {
        const colours = ['rgb(238, 130, 238)', 'rgb(75, 0, 130)', 'rgb(0, 0, 255)', 'rgb(0, 128, 0)', 'rgb(255, 255, 0)', 'rgb(255, 165, 0)', 'rgb(255, 0, 0)']
    }
    
    function activity() {
        challengeOne()
        challengeTwo()
        challengeThree()
    }
    
    try {
        module.exports = {
            challengeOne,
            challengeTwo,
            challengeThree
        } 
    } catch {
    }