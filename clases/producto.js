class Product {
    id;
    name;
    description;
    cost;
    price;
    margin;
    stock;

    constructor(id, name, description, cost, price, margin) {
        this.id = id
        this.name = name
        this.description = description
        this.cost = cost
        this.price = price
        this.margin = margin
        this.stock = 0
        this.items = []
    }
}