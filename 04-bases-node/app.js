const fs = require('fs');

const multiplicacion = (numero = 6) => {
	let salida = '';
	for (let index = 1; index <= 10; index++) {
		salida += `${numero} * ${index} =   ${index * numero}\n`;
	}
	return salida;
};

console.clear();
console.log('---------multiplicacion--------');
console.log(multiplicacion());
let salida = multiplicacion();
fs.writeFile('tabla-del-cinco.txt', salida, (erro) => {
	if (erro) throw erro;
	console.log('se creo el archivo exitosamente');
});
