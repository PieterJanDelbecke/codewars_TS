function solve(arr:string[]){
    const alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
    return arr.map(s=> 
      s.split('').reduce(
        (t,c,i) => c.toLowerCase() === alphabet[i] ? t + 1 : t
      , 0) 
    );
}

console.log(solve(["abode"]))