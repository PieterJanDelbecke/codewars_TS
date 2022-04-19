function disemvowel(str:string):string{
    let regex = /[aeuio]/gi
    return str.replace(regex,'')
}
console.log(disemvowel("This website is for losers LOL!"))