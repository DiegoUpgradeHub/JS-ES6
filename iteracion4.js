//Iteración #4: Map
//4.1 Dado el siguiente array, devuelve un array con sus nombres utilizando .map().
/*
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
*/
console.log('Ejercicio 4.1');
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

let usersName = users.map(user => { return user.name});
console.log(usersName);

//4.2 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.
/*
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
*/
console.log('Ejercicio 4.2');
const users2 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
let usersName2 = users2.map(user => { 
    /*if first string of user name property is A*/
    if (user.name[0].includes('A')) {
    /*then change value to Anacleto*/
    user.name = 'Anacleto';
    };
    return user.name
});
console.log(users2);
console.log(usersName2);

//4.3 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y añade al valor de .name el string ' (Visitado)' cuando el valor de la propiedad isVisited = true.
/*
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];
*/
console.log('Ejercicio 4.3');
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

let visitedCities = cities.map(cityVisited => {
    if (cityVisited.isVisited === true) {
        cityVisited.name = cityVisited.name + ' Visitado';
    };
    return cityVisited.name;
});

console.log(visitedCities);