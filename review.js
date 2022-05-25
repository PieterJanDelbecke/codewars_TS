let lang = {
    af: "Afrikaans",
    nl: "Dutch",
    en: "English",
    fr: "French",
    it: "Ftalian"
}

let langArr = []
for ( const [key, value] of Object.entries(lang)){
    langArr.push({id: key, langague: value})
}

console.log(langArr)