function squareNumber(number){
    return new Promise ((resolve, reject) => {
        if (typeof number !== 'number'){
            reject(new Error("Input must be a number"))
        }
        resolve(number*number)
    })
}

squareNumber(false)
    .then( squareNumber => console.log(typeof squareNumber, squareNumber))
    .catch( error => console.log(error))
    .finally(() => console.log("All good, the promise has finished"))