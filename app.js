
/*  */
/*  */
/*  */
/* Funciones */

/* Agrega un producto al array de productos recibido por parametro */
function addProduct(products) {
    let product_id = products.length
    let name = prompt("Ingrese el nombre del producto: ")
    let description = prompt("Ingrese una descripcion del producto: ")
    let cost = parseFloat(prompt("Ingrese el costo del producto: $ "))
    let price = parseFloat(prompt("Ingrese el precio del producto: $ "))
    let margin = price - cost

    const product = new Product(product_id, name, description, cost, price, margin)

    products.push(product)
    alert("se agrego el producto: " + product.name)
}


/* Agraga un item a la lista de productos */
function addItem(products) {
    let string = "Ingrese el id del tipo de producto que ingresara: \n "

    /* Muestro los id y nombre de todos los productos */
    products.forEach(element => {
        string += " ID: " + element.id + " " + element.name + "\n"
    })

    string += (products.length + 1) + ". Cancelar"

    let pid
    /* Se repite mientras no ingrese un id correcto */
    do {

        pid = parseInt(prompt(string))
        if (!products.some((product) => product.id == pid)) {
            alert("no se encontro ningun producto con el id ingresado")
        }
    }

    while ((!products.some((product) => product.id == pid)) && pid != (products.length + 1))

    if (pid != (products.length + 1)) {
        /* Una vez que lo haya seleccionado creo el item */
        let code = prompt("Ingrese el codigo del producto: ")
        let detail = prompt("Observaciones(opcional) : ")

        const item = new Item(pid, products[pid].items.length, code, detail)

        products[pid].items.push(item)
        products[pid].stock = products[pid].items.length

        alert("se agrego el item " + item.code + " A la lista de productos " + products[pid].name)
    }
}

/* Muestra los productos de un array */
function showProducts(products) {
    if (products.length != 0) {
        let string = ''
        products.forEach(element => {
            string += "ID: " + element.id + "\n"
            string += "Nombre: " + element.name + "\n"
            string += "Descripcion: " + element.description + "\n"
            string += "Costo: " + element.cost + "\n"
            string += "Price: " + element.price + "\n"
            string += "Margen: " + element.margin + "\n"
            string += "Stock: " + element.stock + "\n"
            string += "---- ---- ---- ---- \n"
        })

        alert(string)
    } else {
        console.log("No posee productos cargados")
    }
}

/* Muestra el menu */
function showMenu() {
    let option = 0

    let string = "Ingrese el numero de la opcion deseada: \n 1. Cargar un producto. \n 2. Ver productos. \n 3. Eliminar un producto. \n 4. Agregar items de un producto \n 5. Vender. \n 6. Salir"

    do {
        option = parseInt(prompt(string))

    } while (option > 6 || option < 1)
    return option
}

function buy(products) {

    let carrito = []

    let repeat
    do {

        let string = "Ingrese el id del tipo de producto que desea comprar: \n "

        /* Muestro los id y nombre de todos los productos */
        products.forEach(element => {
            if (element.items.length > 0) {
                string += " ID: " + element.id + " " + element.name + "\n"
            }
        })

        string += (products.length + 1) + ". Cancelar"

        let product_id
        /* Se repite mientras no ingrese un id correcto */
        do {

            product_id = parseInt(prompt(string))
            if (!products.some((product) => product.id == product_id)) {
                console.log("no se encontro ningun producto con el id ingresado")
            }
        }

        while ((!products.some((product) => product.id == product_id)) && product_id != (products.length + 1))

        if (product_id != (products.length + 1)) {

            string = "Ingrese el id del item que desea comprar: \n "

            /* Muestro los id y nombre de todos los productos */
            products[product_id].items.forEach(element => {
                if (!element.sold) {
                    string += " ID: " + element.id + " - Code: " + element.code + "\n"
                }
            })

            string += (products[product_id].items.length + 1) + ". Cancelar"

            /* Se repite mientras no ingrese un id correcto */
            let item_id
            do {
                item_id = parseInt(prompt(string))
                if (!products[product_id].items.some((element) => element.id == item_id)) {
                    console.log("no se encontro ningun item con el id ingresado")
                }
            }

            while ((!products[product_id].items.some((item) => item.id == item_id)) && item_id != (products[product_id].items.length + 1))

            if (item_id != (products[product_id].items.length + 1)) {
                products[product_id].items[item_id].sold = true
                carrito.push(products[product_id].items[item_id])
                /* creo la venta y la muestro por consola */
                const venta = new Venta(0, "Un cliente", new Date(), "efectivo", carrito)
                console.log(venta)
            }

        }
        do {
            repeat = parseInt(prompt("¿Desea agregar un nuevo item al carrito? \n Ingrese el numero de la opcion deseada: \n 1. Si \n 2. No "))
        } while (repeat < 1 || repeat > 2)
    } while (repeat == 1)

    if (repeat == 2) {
        let string = "Se realizo la venta de: \n "

        let total = 0
        carrito.forEach((item) => {
            total = total + parseFloat(products[item.product_id].price)
        })

        carrito.forEach((item) => {
            string += products[item.product_id].name + " - Codigo: " + item.code + " - P/U: $ " + products[item.product_id].price + "\n"
        })

        string += "\n Total : $ " + total

        alert(string)
    }
}

/*  */
/*  */
/* Carga inicial */
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


/*  */
/*  */
/*  */
/* Aplicacion */

let show = true

while (show) {
    let option = showMenu()

    switch (option) {
        case 1:
            addProduct(products)
            break;
        case 2:
            showProducts(products)
            break;
        case 3:
            console.log("proximamente")
            break;
        case 4:
            addItem(products)
            break;
        case 5:
            buy(products)
            break;
        case 6:
            show = false
            break;
    }
}