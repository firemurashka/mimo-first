//Функция---------------------------------------------------------------
function greenGuest01() {
	console.log('Hi' + 'Jon');
	console.log('Hola' + 'Jon');
}
console.log("Обычная функция:");
greenGuest01();


//Функция стрелочная----------------------------------------------------
const greenGuest02 = () => {
	console.log('Hi' + 'Jon');
	console.log('Hola' + 'Jon');
}
console.log("Стрелочная функция:");
greenGuest02();

//Функция стрелочная с параметром name-----------------------------------
const greenGuest03 = (name) => {
	console.log('Hi', name);
	console.log('Hola', name);
}
console.log("Функция стрелочная с параметром name:");
greenGuest03('Jon');

//Функция стрелочная с параметром и условием-----------------------------------
const dailyMotivation = (day) => {
	if (day === 'mon') console.log('You are capable of anything you set your mind to'); else console.log('You are an inspiration to everyone around you');
}
console.log("Функция стрелочная с параметром и условием:");
dailyMotivation('mon');

//Функция стрелочная с return-----------------------------------
const isEvenNumber = (number) => {
	return number % 2 == 0;
}
console.log("Функция стрелочная с return:");
console.log(isEvenNumber(26));

//Функция стрелочная без return-----------------------------------
const isEvenNumber01 = (number) => number % 2 == 0;
console.log("Функция стрелочная без return:");
console.log(isEvenNumber01(26));

//Функция стрелочная с параметром и условием-----------------------------------
let shouldDeployChute = (altitude) => {
	if (altitude <= 2000) return true;
	return false;
}
console.log("Функция стрелочная с параметром и условием:");
console.log(shouldDeployChute(2000));

//Функция стрелочная с 1 параметром - можно не писать скобки-----------------------------------
let balance = 100;
const withdraw = amount => {
	balance = balance - amount;
	console.log(balance);
	if (balance < 0) {
		console.log("Overdrawn");
	} console.log('object');
}
console.log("Функция стрелочная с 1 параметром - можно не писать скобки:");
withdraw(10);

//Функция с параметром по умолчанию----------------------------------------------------
const pitcherERA = (er, ip = 9) => {
	return er * 9 / ip;
}
console.log(pitcherERA(10, 12));
//используется параметр по умолчанию
console.log(pitcherERA(10));

//строковый литерал----------------------------------------------------
let favoriteIceCream = `chocolate`;
console.log(favoriteIceCream);
console.log(typeof (favoriteIceCream));


//строковый литерал ----------------------------------------------------
let bestDessert = `${favoriteIceCream} ice cream`;
console.log(bestDessert);

//строковый литерал ----------------------------------------------------
const elementarySchool = 90;
const middleSchool = 70;
const hidhSchool = 100;
const students = `# of Students: ${elementarySchool + middleSchool + hidhSchool}`;
console.log(students);

//строковый литерал вызов функции без скобок в параметре----------------------------------------------------
const bestColor = color => {
	const name = "Jerry";
	return `${name} always wears ${color} shirts.`;
}
console.log(bestColor`blue`);

//Виды переменных-------------------------------------------------------------------------
var first;
const second = 3.14;
let three;


//Стрелочная функция------------------------------------------------------
let display = () => {
	console.log("Hello");
}
display()

//Локальные переменные area--------------------------------------------
function calculateArea(width, height) {
	let area = width * height;
	return area;
}
const wallSize = calculateArea(6, 7);
console.log(wallSize);

//Глобальные переменные------------------------------------------------
const winningNumber = Math.floor((Math
	.random() * 3));

function drawWinner() {
	const players = ["Amanda",
		"Sheila",
		"Rob"
	];
	const winner = players[winningNumber];
	console.log("The winner is " +
		winner);
}
drawWinner();
console.log(winningNumber);

//деструризация---------------------------------------------------------------------------
const {
	name01,
	age
} = {
	name01: "Vika",
	age: 36
}
console.log('Деструктуризация объекта');
console.log(name01);

//----------------------
const smartTV = {
	type: "QLED",
	shape: "Flat",
	ports: "HDMI",
	connectivity: "Wi-Fi"
};
const {
	type: screenType,
	shape: screenShape,
} = smartTV;
console.log(screenType);
console.log(screenShape);
console.log(smartTV);
//----------------------
const oldShows = {
	fifties: "Maverick",
	sixties: "The Saint",
	seventies: "The Love Boat",
	eighties: "Manimal",
	nineties: "Dawson's Creek"
};
const { eighties, ...otherOldShows } = oldShows;
console.log(`The best tv show in the 80s was ${eighties}`);
console.log(otherOldShows);

//-деструризация задаем свойство и его значение которого не было---------------------

const beer = {
	name: ' Blue Moon White',
	alcoholPercentage: 5.4,
	calories: 171,
	carbs: 12.9
};
const { name, alcoholPercentage, calories, carbs, brand = "N/A" } = beer;
console.log(brand);
//--Деструктуризация двух первых элементов массива с помощью параметров функций(переменных)-------------------
const mountains = ["Swiss Alps", "Mount Logan", "Mount Fuji", "Mauna Kea", "Jotunheimen Mountains"];
function getMountainsNickname([alps, logan]) {
	console.log(`The ${alps} are The Magical Mountains.`);
	console.log(`The ${logan} is The Snowy Paradise.`);
}
getMountainsNickname(mountains);