/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
let nombre;
let temperatura;
let sexo;
let edad;
let acumEdad = 0;
let promedio;
let nombreMujerMasTemperatura;
let temperaturaMax;
let contadorSexoF = 0;
let contadorSexoM = 0;
let flagMujer = 0;

	for (let i = 0; i < 5; i++){
	
		nombre = prompt("Ingrese Nombre");
		while (!(isNaN(nombre))) {
			nombre = prompt("Error Ingrese Nombre");
		}

		temperatura = parseFloat(prompt("Ingrese Temperatura Corporal"));
		while(temperatura < 35 || isNaN(temperatura)){
		temperatura = parseFloat(prompt("Ingrese Temperatura Corporal Valida"));
		}
		sexo = prompt("Ingrese Sexo f-m");
		while (sexo != 'f' && sexo != 'm') {
			sexo = prompt("Error Ingrese Sexo f-m");
		}
		edad = parseInt(prompt("Ingrese Edad"));
		while (edad < 1 || isNaN(edad)) {
			edad = parseInt(prompt("Error Ingrese Edad"));
		}

		acumEdad += edad;

		if(sexo == 'f'){
			contadorSexoF++;
			if(flagMujer == 0 || temperatura > temperaturaMax){
				temperaturaMax = temperatura;
				nombreMujerMasTemperatura = nombre;
				flagMujer = 1;
			}
		}
		else {
			contadorSexoM++;
		}	
	}
	promedio = acumEdad / 5;

	console.log("La cantidad de Hombres son " + contadorSexoM + " La cantidad de mujeres  " + contadorSexoF);
	console.log("La edad promedio es " + promedio);
	if(flagMujer == 0){
		console.log("No se ingresaron Mujeres");
	}
	else{
	console.log("el nombre de la mujer con mas temperatura es " + nombreMujerMasTemperatura + " y tiene " + temperaturaMax);
}


}
