
/* addition */
function addition(number_1, number_2) {
    let addition = number_1 + number_2
    return addition
}


/* subtraction */
function subtraction(number_1, number_2) {
    let subtraction = number_1 - number_2
    return subtraction
}

/* multiplication */
function multiplication(number_1, number_2) {
    let multiplication = number_1 * number_2
    return multiplication
}

/* remainder */
function remainder(number_1, number_2) {
    let remainder = number_1 % number_2
    return remainder
}


/* division */
function division(number_1, number_2) {
    let division = number_1 / number_2

    /* Control de division por cero */
    if (number_2 == 0) {
        return "No se puede dividir por cero"
    } else {
        return division
    }
}

/* Muestra menu --- Retorna el numero entero de la opcion seleccionada */
function showMenu() {
    let option
    while (option != 1 && option != 2 && option != 3 && option != 4 && option != 5 && option != 6) {
        option = prompt(" CALCULADORA \n 1. Sumar \n 2. Restar \n 3. Multiplicar \n 4. Dividir \n 5. Calcular resto \n 6. Salir \n Ingrese una opcion: ")

        if (option != 1 && option != 2 && option != 3 && option != 4 && option != 5 && option != 6) {
            alert("Ingrese una opcion valida")
        }
    }

    return parseInt(option)
}

let option = showMenu();

while (option != 6) {

    let number_1 = '';
    let number_2 = '';

    /* solicito que ingrese los numeros */
    do {
        number_1 = prompt("Ingrese un numero: ")
        number_2 = prompt("Ingrese un numero: ")

        if (number_1 == '' || number_2 == '') {
            alert("Debe ingresar dos numeros")
        }

    } while (number_1 == '' || number_2 == '')

    if (parseFloat(number_1)) {
        number_1 = parseFloat(number_1)
    }
    if (parseFloat(number_2)) {
        number_2 = parseFloat(number_2)
    }

    /* Calculo en base a la operacion seleccionada */
    let result;
    switch (option) {
        case 1: result = number_1 + "+" + number_2 + "=" + addition(number_1, number_2)
            break
        case 2: result = number_1 + "-" + number_2 + "=" + subtraction(number_1, number_2)
            break
        case 3: result = number_1 + "*" + number_2 + "=" + multiplication(number_1, number_2)
            break
        case 4: result = number_1 + "/" + number_2 + "=" + division(number_1, number_2)
            break
        case 5: result = number_1 + "%" + number_2 + "=" + remainder(number_1, number_2)
            break
    }

    alert(result)
    option = showMenu()
}