c1 = {
    x: 10,
    y: 20
}
c2 ={
    x: 33,
    y: 66
}

function printCoordinates(){
    console.log(this.x, this.y)
}

c1_func = printCoordinates.bind(c1)
c2_func = printCoordinates.bind(c2)

c1_func()
c2_func()