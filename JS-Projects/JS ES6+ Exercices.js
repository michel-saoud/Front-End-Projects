/* EXERCISE 1 (Arrow Functions)

Crea una arrow function que tenga dos parametros a y b y 
que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
por consola la suma de los dos parametros.

1.1 Ejecuta esta función sin pasar ningún parametro
1.2 Ejecuta esta función pasando un solo parametro
1.3 Ejecuta esta función pasando dos parametros */

const sum = (a = 10, b = 5) => console.log(a + b);
console.log(sum())
console.log(sum(5,))
console.log(sum(30,5))

/* EXERCISE 2 (Destructuring)
2.1 En base al siguiente javascript, crea variables en base a las propiedades 
del objeto usando object destructuring e imprimelas por consola. Cuidado, 
no hace falta hacer destructuring del array, solo del objeto.*/

const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020};

// Destructuring del objeto
const { title, year } = game;

// Imprimir las variables por consola
console.log(title)
console.log(year)

/* 2.2 En base al siguiente javascript, usa destructuring para crear 3 variables 
llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
imprimelo por consola. */

const fruits = ['Banana', 'Strawberry', 'Orange'];

// Destructuring del array
const [fruit1, fruit2, fruit3] = fruits;

// Imprimir las variables por consola
console.log(fruit1); // 'Banana'
console.log(fruit2); // 'Strawberry'
console.log(fruit3); // 'Orange'

/*2.3 En base al siguiente javascript, usa destructuring para crear 2 
variables igualandolo a la función e imprimiendolo por consola. */

const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'};
};

// Destructuring del objeto retornado por la función
const { name, race } = animalFunction();

// Imprimir las variables por consola
console.log(name); // 'Bengal Tiger'
console.log(race); // 'Tiger'

/* EXERCISE 3 (Spread Operator)
3.1 Dado el siguiente array, crea una copia usando spread operators.*/
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsListCopy = [...pointsList];

// Imprimir la copia del array por consola
console.log(pointsListCopy); // [32, 54, 21, 64, 75, 43]

/*3.2 Dado el siguiente objeto, crea una copia usando spread operators.*/
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyCopy = {...toy};

// Imprimir la copia del objeto por consola
console.log(toyCopy); // {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'}

/*3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
spread operatos.*/
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54, 87, 99, 65, 32];

const combinedPointsList = [...pointsList, ...pointsLis2];

// Imprimir el nuevo array combinado por consola
console.log(combinedPointsList); // [32, 54, 21, 64, 75, 43, 54, 87, 99, 65, 32]

/*3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
con spread operators.*/
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};

const mergedToy = {...toy, ...toyUpdate};

// Imprimir el nuevo objeto fusionado por consola
console.log(mergedToy); 
// {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor', lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

/* EXERCISE 4 (Map)
4.1 Dado el siguiente array, devuelve un array con sus nombres 
utilizando .map().*/
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const names = users.map(user => user.name);

/*4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
empiece por 'A'.*/
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const newUsers = users.map(user => {
    if(user.name[0] === 'A') {
        return { ...user, name: 'Anacleto' };
    }
    return user;
});

/* EXERCISE 5 (Filter)
5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean mayor que 18.*/

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const adults = ages.filter(age => age > 18);

/*5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean par.*/
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const evenAges = ages.filter(age => age % 2 === 0);

/*5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que tengan el gameMorePlayed = 'League of Legends'.*/
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];  

const lolStreamers = streamers.filter(streamer => streamer.gameMorePlayed === 'League of Legends');

/* EXERCISE 6 (Find)
6.1 Dado el siguiente array, utiliza .find() para encontrar el primer número 100*/
const numbers = [32, 21, 63, 95, 100, 67, 43];
const number = numbers.find(number => number === 100);

/*6.2 Dado el siguiente array, usa .find() para econtrar la pelicula del año 2010.*/
const movies = [
	{title: 'Madagascar', stars: 4.5, date: 2015},
	{title: 'Origen', stars: 5, date: 2010},
	{title: 'Your Name', stars: 5, date: 2016}
];

const movie = movies.find(movie => movie.date === 2010);

/* EXERCISE 7 (Reduce)
7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de 
los alumnos usando la función .reduce().*/

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

let totalScore = exams.reduce((acc, exam) => acc + exam.score, 0);

/*7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los 
alumnos que esten aprobados usando la función .reduce().*/

let totalScore = exams.reduce((acc, exam) => {    
    if(exam.score >= 5) {
        return acc + exam.score;
    }
    return acc;
}, 0);  

