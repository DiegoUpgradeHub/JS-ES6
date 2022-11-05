//Iteración #5: Filter
//5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean mayor que 18
//const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
console.log('Ejercicio 5.1');
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

let aboveEighteen = ages.filter(moreThan18 => moreThan18 > 18);
console.log(aboveEighteen);

//5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean par.
//const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
console.log('Ejercicio 5.2');
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

let evenNumbers = ages2.filter( even => even%2 === 0);
console.log(evenNumbers);

//5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of Legends'.
/*
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
*/
console.log('Ejercicio 5.3');
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

let lolStreamers = streamers.filter(lol => lol.gameMorePlayed === 'League of Legends');
console.log(lolStreamers);

//5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos usar la funcion .includes() para la comprobación.
/*
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
*/
console.log('Ejercicio 5.4');
const streamers2 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
let streamersNameU = streamers2.filter(nameU => nameU.name.includes('u'));
console.log(streamersNameU);

//5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion .includes() para la comprobación.Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35.
console.log('Ejercicio 5.5');
const streamers3 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

let lolStreamersThirtyfive = streamers3.filter(lolThirtyfive => {
    let streamerSelection = lolThirtyfive.gameMorePlayed.toLowerCase().includes('legends');
    if (streamerSelection && lolThirtyfive.age > 35){
        lolThirtyfive.name = lolThirtyfive.name.toUpperCase();
        lolThirtyfive.gameMorePlayed = lolThirtyfive.gameMorePlayed.toUpperCase();
    }
    return streamerSelection;
});

console.log(lolStreamersThirtyfive);

//5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola los streamers que incluyan la palabra introducida en el input. De esta forma, si introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
/*
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
*/
console.log('Ejercicio 5.6');

const streamers4 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

debugger
let inputSelection = document.querySelector('[data-function="toFilterStreamers1"]');

const filteredStreamers = streamers4.filter((streamer) => 
    streamer.name.includes(inputSelection)
);
console.log(filteredStreamers);

const handleChange = (event) => {
    console.log(event.target.value);
    console.log(event);
    const filteredStreamers = streamers4.filter((streamer) => 
    streamer.name.toLowerCase().includes(inputSelection.value.toLowerCase())
    );
    console.log(filteredStreamers);
};

inputSelection.addEventListener("input", handleChange);

//5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola los streamers que incluyan la palabra introducida en el input. De esta forma, si introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'. En este caso, muestra solo los streamers filtrados cuando hagamos click en el button.
/*
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
*/
//debugger
console.log('Ejercicio 5.7');
const streamers5 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const filterStreamers = (event) => {
    const input$$ = event.target.previousElementSibling;
    const filteredStreamers = streamers5.filter((streamer) => streamer.name.toLowerCase().includes(input$$.value.toLowerCase())
    );
    console.log(filteredStreamers);
};
const button = document.querySelector('[data-function="toShowFilterStreamers"]');

button.addEventListener("click", filterStreamers);
