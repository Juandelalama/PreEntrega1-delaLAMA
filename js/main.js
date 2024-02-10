const productos = [
    {
        nombre: "V8 Twin Turbo",
        precio: 500,
    },
    {
        nombre: "V8 SuperCharged",
        precio: 200,
    },
    {
        nombre: "V6 Flat",
        precio: 300,
    },
    {
        nombre: "V12",
        precio: 120,
    },
    {
        nombre: "V12 By Pagani",
        precio: 250,
    },
]

let carrito = [];

let seleccion = prompt("Hola, ¿Quiere comprar su motor?");

while (seleccion != "Si" && seleccion != "No") {
    alert("Por favor ingresa una de las siguientes opciones, Si o No (RESPESTAR MAYUSCULAS)");
    seleccion = prompt("Hola, ¿Quiere comprar su motor?");
}

if (seleccion == "Si") {
    alert("A continuación nuestros motores ya armados");
    let todosLosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
    alert(todosLosProductos.join(" - "));
} else if (seleccion == "No") {
    alert("Gracias por visitar Pure Race, Su cuenta final se encuentra en la consola!");
}

while (seleccion != "No") { 
    let producto = prompt("Agrega un producto a tu carrito!");
    let precio = 0;

    if (
        producto == "V8 Twin Turbo" ||
        producto == "V8 Supercharged" ||
        producto == "V6 Flat" ||
        producto == "V12" ||
        producto == "V12 By Pagani"
    ) {
        switch (producto) {
        case "V8 Twin Turbo":
            precio = 500;
            break;
        case "V8 Supercharged":
        precio = 200;
            break;
            case "V6 Flat":
        precio = 300;
            break;
            case "V12":
        precio = 120;
            break;
            case "V12 By Pagani":
        precio = 250;
            break;
        default:
        break;
}
let unidades = parseInt(prompt("¿Cuantas unidades quiere de este motor? Ingrese un número"));

    carrito.push({ producto, unidades, precio });
    console.log(carrito);
} else {
    alert("No tenemos ese producto");
}


seleccion = prompt("Quiere seguir comprando Si o No");


while (seleccion == "No") {
alert("Gracias por la compra, hasta la proxima");

carrito.forEach((carritoFinal) => {
            console.log(
                `"producto:" ${carritoFinal.producto}, "unidades:" ${carritoFinal.unidades}, "Total a pagar por producto:" ${
            carritoFinal.unidades * carritoFinal.precio
            }`
        );
    });
    break;
}
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
console.log(`El total a pagar por su compra es de:  ${total}`);