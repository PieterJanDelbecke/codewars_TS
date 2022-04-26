function removeDuplicateWords(s: string) {
    const wordArray = s.split(" ")
    const wordSet = new Set(wordArray)
    const result = Array.from(wordSet)
    return result
  }

  console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))