//Iteración #7: Reduce
//7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de los alumnos usando la función .reduce().
/*
const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];
*/
const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

let scoreSum = exams.reduce(
    (accumulator, score) => accumulator + score.score,
    0
);
console.log('Suma total: ', scoreSum);


//7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los alumnos que esten aprobados usando la función .reduce().
let scoreSumPassed = exams.reduce((accumulator, score) => {
    if (score.score > 5) {
        return accumulator + score.score;
    } else {
        return accumulator;
    }
}, 0);
console.log('Suma de aprobados: ', scoreSumPassed);

//7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().

//let averageScore = exams.reduce((accumulator, score) => {
    //calculate total scoreSum -> got it from 7.1
    //access last index number of exams array -> using exams.length
    //divide scoreSum by total of items in exams array
    // --> No es necesario utilizar un .reduce()
//}, 0);
let averageScore = scoreSum / exams.length;
console.log('Nota media: ', averageScore);