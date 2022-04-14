function twoSort(s:string[]){
    return s
    .sort()[0]
    .split("")
    .join("***")
}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]))