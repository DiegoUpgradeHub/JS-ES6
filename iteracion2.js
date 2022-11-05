//Iteración #2: Destructuring
//2.1 En base al siguiente javascript, crea variables en base a las propiedades del objeto usando object destructuring e imprimelas por consola. Cuidado, no hace falta hacer destructuring del array, solo del objeto.
//const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}
console.log('Ejercicio 2.1');
const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}

let {title, gender, year} = game;

console.log('Todo en una línea: ', title, gender, year);
console.log('Solo el título: ', title);
console.log('Solo los géneros: ', gender);
console.log('Solo el año: ', year);

//2.2 En base al siguiente javascript, usa destructuring para crear 3 variables llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente imprimelo por consola.
//const fruits = ['Banana', 'Strawberry', 'Orange'];
console.log('Ejercicio 2.2');
const fruits = ['Banana', 'Strawberry', 'Orange'];
/* --> Esto no es destructuring! <--
let fruit1 = fruits[0];
let fruit2 = fruits[1];
let fruit3 = fruits[2];
*/
//Esto sí es destructuring
let [fruit1, fruit2, fruit3] = fruits;

console.log('fruta 1: ', fruit1);
console.log('fruta 2: ', fruit2);
console.log('fruta 3: ', fruit3);

//2.3 En base al siguiente javascript, usa destructuring para crear 2 variables igualandolo a la función e imprimiendolo por consola.
//const animalFunction = () => {
//    return {name: 'Bengal Tiger', race: 'Tiger'}
//};
console.log('Ejercicio 2.3');
const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};
let {name, race} = animalFunction();
console.log('Nombre del animal: ', name);
console.log('Raza del animal: ', race);

//2.4 En base al siguiente javascript, usa destructuring para crear las variables name y itv con sus respectivos valores. Posteriormente crea 3 variables usando igualmente el destructuring para cada uno de los años y comprueba que todo esta bien imprimiendolo.
//const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }
console.log('Ejercicio 2.4');
const car = {name4: 'Mazda 6', itv: [2015, 2011, 2020] }
let {name4, itv} = car;
console.log('Nombre del coche: ', name4);
console.log('Todos los años de itv: ', itv);
/* <-- Esto no es destructuring --> 
console.log('Primer año de itv: ', itv[0]);
console.log('Segundo año de itv: ', itv[1]);
console.log('Tercer  año de itv: ', itv[2]);
*/
//Esto sí es destructuring
let [year1, year2, year3] = itv;
console.log('Primer año de itv: ', year1);
console.log('Segundo año de itv: ', year2);
console.log('Tercer año de itv: ', year3);