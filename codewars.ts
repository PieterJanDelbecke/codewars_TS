function accum(s: string){
    let arr:string[] = []
    s.toLowerCase().split("").forEach((letter, index)=>{
        arr.push(letter.toUpperCase())
        for (let i = 0 ; i < index; i++){
            arr.push(letter)
        }
        if (index < s.length-1){
            arr.push("-")
        }
    })
    return arr.join("")
}

console.log(accum("ZpglnRxqenU"))