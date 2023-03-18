//llamda a la funcion para usar con el boton
function CargaDatos(){
    //declaracion de variables a usar
    let precio_max = 0, precio_min = 999999, codigo_max, codigo_min;
    let stock_total = 0;

    //ingresar la cantidad de articulos que se desea ingresar
    let articulos = prompt("Ingrese la cantidad de articulos que desea ingresar: ");

    //realiza un bucle en base a la cantidad de articulos ingresada por el usuario
    for (let i = 1; i <= articulos; i++){
        let codigo = prompt("Ingrese el codigo del articulo N°" + i + ":");
        let precio = prompt("Ingrese el precio del articulo N°" + i +":");
        let stock = prompt("Ingrese el stock del articulo N°" + i + ":");
        
        //almacena el stock total de los productos agregados
        stock_total += Number(stock);

        //verifica si el precio ingresado es el mayor precio almacenado
        if (precio > precio_max){
            precio_max = precio;
            codigo_max = codigo;
        }
        //verifica si el precio ingresado es el menor precio almacenado
        if (precio < precio_min){
            precio_min = precio;
            codigo_min = codigo;
        }
    }

    //muestra un alert con toda la informacion del programa, con mensajes distintos dependiendo la cantidad ingresada
    if (articulos == 0){
        alert("No se ingreso ningún articulo...")
    }
    else if (articulos == 1){
        alert("El codigo del articulo ingresado es " + codigo_max + " y su precio es de " + precio_max + "$ \nEl stock total es de " + stock_total); 
    }else{
        alert("El codigo del articulo mas caro de precio " + precio_max + "$ es " + codigo_max + "\nEl precio mas barato es " + precio_min + "$ con codigo " + codigo_min +"\nLa cantidad de articulos ingresados fue de " + articulos + "\nEl stock total de la tienda es de " + stock_total);
    }
}
