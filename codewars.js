function disemvowel(str){
    const regex = /[a,e,i,o,u]/gi
    return str.replace(regex, '')
}

console.log(disemvowel("This website is for losers LOL!"))
console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"))