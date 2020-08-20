/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar() {
  let marca;
  let precio;
  let peso;
  let tipo;
  let acumuladorPeso = 0;
  let marcaCaroliquido;
  let precioCaroLiquido;
  let flagLiquido = 0;
  let pesoLivianoSolido;
  let marcaLivianoSolido;
  let flagSolido = 0;
  let seguir;


  do {
    marca = prompt("Ingrese Marca");
    while (!(isNaN(marca))) {
      marca = prompt("Error Ingrese Nombre de la Marca");
    }

    precio = parseFloat(prompt("Ingrese Precio"));
    while (precio < 1 || isNaN(precio)) {
      precio = parseFloat(prompt("Error Ingrese Precio"));
    }

    peso = parseFloat(prompt("Ingrese Peso"));
    while (peso < 1 || isNaN(peso)) {
      peso = parseFloat(prompt("Error Ingrese Peso Valido"));
    }

    tipo = prompt("Ingrese Tipo solido/liquido");
    while (tipo != 'solido' && tipo != 'liquido') {
      tipo = prompt("Error Ingrese Tipo solido/liquido");
    }

    acumuladorPeso += peso;

    if (tipo == 'liquido') {
      if (flagLiquido == 0 || precio > precioCaroLiquido) {
        precioCaroLiquido = precio;
        marcaCaroliquido = marca;
        flagLiquido = 1;
      }
    }

    else {
      if (flagSolido == 0 || peso < pesoLivianoSolido) {
        pesoLivianoSolido = peso;
        marcaLivianoSolido = marca;
        flagSolido = 1;

      }
    }
    seguir = prompt("Desea Agregar Otro Producto? : ")
  } while (seguir == 's');


  console.log("El peso total de la compra es de " + acumuladorPeso);
  if (flagLiquido == 0) {
    console.log("No se ingresaron liquidos");
  }
  else {
    console.log("La marca del mas caro de los liquido es " + marcaCaroliquido + " y el precio es $ " + precioCaroLiquido);
  }
  if (flagSolido == 0) {
    console.log("No se ingresaron Solidos");
  }
  else {
    console.log("el mas liviano de los solido es " + marcaLivianoSolido + " y pesa " + pesoLivianoSolido + " kg");
  }
}