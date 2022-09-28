class StockItem {
    static total_qty = 0

    constructor (description, qty){
        this.description = description
        this.qty = qty
        StockItem.total_qty += qty
    }
}

warehouse = [
    new StockItem("CPU", 10),
    new StockItem("Motherboard", 5),
    new StockItem("RAM", 20)
]

console.log(`Total Stock: ${StockItem.total_qty}`)