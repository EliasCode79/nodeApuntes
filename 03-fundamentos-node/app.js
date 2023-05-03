const { crearArchivo } = require('./helpers/01-require');
const args = require('yargs').option('b', {
	alias: 'base',
	type: 'number',
	demandOption: true,
}).argv;

console.clear();
const base = 9;

// crearArchivo(base)
// .then((nombreArchivo) => console.log(nombreArchivo, 'creado'))
// .catch((error) => console.log(error));
//
// console.log(process.argv);
console.log(args);
console.log('base yars: ', args.base);
