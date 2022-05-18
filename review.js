const data = {
    en: "english",
    nl: "dutch",
    it: "italian"
}

let newArray = []

for (const [key, value] of Object.entries(data)){
    newArray.push({id: key, lang: value})
}
