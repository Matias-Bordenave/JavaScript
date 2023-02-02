/* function to get the products */
function getProducts() {
    let products = JSON.parse(localStorage.getItem("products"))
    return products
}

function createProduct() {
    let main__section 
    main__section = document.getElementById("main__section")

    let html

    html = "<form id='form'>"
    html += "<label class='form-label' for='product__name'> Name </label>"
    html += "<input id='product__name' type='text' class='form-control' required>"
    
    html += "<label class='form-label' for='product__description'> Description </label>"
    html += "<input id='product__description' type='text' class='form-control' required>"
    
    html += "<label class='form-label' for='product__cost'> Cost </label>"
    html += "<input id='product__cost' type='text' class='form-control' required>"

    html += "<label class='form-label' for='product__price'> Price </label>"
    html += "<input id='product__price' type='text' class='form-control' required>"

    html += "<button type='submit' class='btn btn-primary'>Submit</button>"

    html += "</form>"

    main__section.innerHTML = html

    let form
    form = document.getElementById('form')
    form.addEventListener('submit', addProduct)

}


function addProduct(e) {

    e.preventDefault()

    let form = e.target

    let name 
    name = form.children[0].value
    let description 
    description = form.children[1].value
    let cost 
    cost = form.children[2].value
    let price 
    price = form.children[3].value

    let new_product 
    new_product= new Product(products.length + 1 , name , description, cost , price, price-cost )

    products.push(new_product)

    saveLocal('products',)
}


/* Guarda un item en el local storage */
const saveLocal = (key, value) => { localStorage.setItem(key, value) }

/* Inicia una precarga de datos para probar la aplicacion */
function start() {
    let products = []
    products.push(new Product(products.length, "bateria", "bateria de 2000mha", 315, 500, 500 - 315, 0, 0))
    products.push(new Product(products.length, "mouse", "mouse de 100bpi", 3015, 4500, 4500 - 3015, 0, 0))
    products.push(new Product(products.length, "impresora", "Impresora HP", 7305, 8500, 8500 - 7305, 0, 0))

    products[0].items.push(new Item(products[0].id, products[0].items.length, 'abcd-415', ''))
    products[0].items.push(new Item(products[0].id, products[0].items.length, 'abcd-416', ''))
    products[0].items.push(new Item(products[0].id, products[0].items.length, 'abcd-417', ''))
    products[0].items.push(new Item(products[0].id, products[0].items.length, 'abcd-418', ''))
    products[0].stock = products[0].items.length

    products[1].items.push(new Item(products[1].id, products[1].items.length, 'sdfg-704', 'color blanco'))
    products[1].items.push(new Item(products[1].id, products[1].items.length, 'sdfg-701', 'color blanco'))
    products[1].items.push(new Item(products[1].id, products[1].items.length, 'sdfg-702', 'color rojo'))
    products[1].items.push(new Item(products[1].id, products[1].items.length, 'sdfg-703', 'color blanco'))
    products[1].stock = products[1].items.length

    products[2].items.push(new Item(products[2].id, products[2].items.length, 'kjhg-001', 'color blanco'))
    products[2].items.push(new Item(products[2].id, products[2].items.length, 'kjhg-002', 'color gris'))
    products[2].items.push(new Item(products[2].id, products[2].items.length, 'kjhg-003', 'color negro'))
    products[2].items.push(new Item(products[2].id, products[2].items.length, 'kjhg-004', 'color negro'))
    products[2].stock = products[2].items.length

    saveLocal("products", JSON.stringify(products))

    console.log("productos cargados")

    products = getProducts()

    return products
}

/* Carga la tabla de productos en la seccion principal */
function showProducts(products) {

    let html
    let main__section
    main__section = document.getElementById("main__section")

    html = "<article class='col-8'>"
    html += "<h4> PRODUCTS </h4>"

    html += "<div class='d-flex flex-row-reverse'>"
    html += "<button class='btn btn-success' onClick='createProduct()'> Agregar Producto</button>"
    html += "</div>"

    if (products.length != 0) {
        html += "<table class='table table-striped table-hover'>"
        html += "<thead>"
        html += "<th> ID </th>"
        html += "<th> Nombre </th>"
        html += "<th> Descripcion </th>"
        html += "<th> Precio </th>"
        html += "<th> Margen </th>"
        html += "<th> Stock </th>"
        html += "<th> Costo </th>"
        html += "<th> Acciones </th>"
        html += "</thead>"

        html += "</tbody>"
        products.forEach((element) => {
            html += "<tr>"
            html += "<td> " + element.id + "</td>"
            html += "<td> " + element.name + "</td>"
            html += "<td> " + element.description + "</td>"
            html += "<td> " + element.cost + "</td>"
            html += "<td> " + element.price + "</td>"
            html += "<td> " + element.margin + "</td>"
            html += "<td> " + element.stock + "</td>"
            html += "<td>"
            html += "<button class='btn btn-info' onclick='showItems(products[" + element.id + "])'> Ver Items </button>"
            //html += "<button class='btn btn-info' onclick='addItem(products[" + element.id + "])'> Nuevo Item </button> "
            html += "</td>"
            html += "</tr>"
        })

        html += "</tbody>"
        html += "</table>"
    } else {
        html += "<p> No posee Productos cargados </p>"
    }

    html += "</article>"

    main__section.innerHTML = html
    console.log(products)
}

function showItems(product) {

    // check
    console.log(product)
    let html

    let main__section
    main__section = document.getElementById('main__section')

    html = "<article class='col-8'>"
    html += "<h4> ITEMS </h4>"

    if (product.items.length != 0) {
        html += "<table class='table table-striped table-hover'>"
        html += "<thead>"
        html += "<th> ID </th>"
        html += "<th> Nombre </th>"
        html += "<th> Descripcion </th>"
        html += "<th> Precio </th>"
        html += "<th> Codigo </th>"
        html += "<th> Acciones </th>"
        html += "</thead>"

        html += "</tbody>"

        product.items.forEach((element) => {
            if (!element.sold) {
                html += "<tr>"
                html += "<td> " + element.id + "</td>"
                html += "<td> " + product.name + "</td>"
                html += "<td> " + product.description + "</td>"
                html += "<td> " + product.price + "</td>"
                html += "<td> " + element.code + "</td>"
                html += "<td>"
                html += "<button class='btn btn-success' onclick='addToCarrito(products[" + product.id + "].items[" + element.id + "])'> Agregar al carrito </button>"
                html += "</td>"
                html += "</tr>"
            }
        })

        html += "</tbody>"
        html += "</table>"
    } else {
        html += "<p> No posee Productos cargados </p>"
    }

    html += "</article>"

    main__section.innerHTML = html


}

/* Agrega  un iterm al carrito */
function addToCarrito(item) {
    item.sold = true

    carrito.push(item)
    showCarrito(carrito)
}

/* Muestra la tabla del carrito de compras */
function showCarrito(carrito) {

    let html

    let main__section
    main__section = document.getElementById('main__section')

    console.log(carrito)
    if (carrito.length == 1 ) {
        html = "<article class='col-3'>"
        html += "<h4> CARRITO </h4>"
        html += "<table class='table table-striped table-hover' id='carrito__table'>"
        html += "<thead>"
        html += "<th> Producto </th>"
        html += "<th> Codigo </th>"
        html += "<th> Precio </th>"
        html += "<th> Acciones </th>"
        html += "</thead>"
        html += "<tbody>"
        main__section.innerHTML += html
    } else {
        html = ""
    }

    let carrito__table = document.getElementById("carrito__table")

    let total = 0
    carrito.forEach((item) => {

        total = total + products[item.product_id].price

        html += "<tr>"
        html += "<td> " + products[item.product_id].name + "</td>"
        html += "<td> " + item.code + "</td>"
        html += "<td> " + products[item.product_id].price + "</td>"
        html += "<td> <button class='btn btn-danger' onclick='deleteFromCarrito(" + item.code + ")'> Eliminar </button> </td>"
        html += "</tr>"
    })

    html += "<tr colspan='3'>"
    html += "<td> TOTAL </td>"
    html += "<td> " + total + "</td>"
    html += "</tr>" 
    

    carrito__table.innerHTML = html

    html = "</tbody>"
    html += "</table>"
    html += "</article>"

    main__section.innerHTML += html
}

function deleteFromCarrito(code) {
    let item = carrito.find(item.code == code )
    console.log(item)
}

/*  */
/*  */
/*  */
/* APLICACION */
let carrito = []

let products = getProducts()

if (products == null) {
    products = start()
}
//check
console.log(products)

showProducts(products)