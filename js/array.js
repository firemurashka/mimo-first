//Массив  - отдельный подвид объекта, он позволяет нам хранить данные, но в отличии от объекта управлять этими данными мы можем гораздо гибче.

// Создание массива----------------
let arr1 = new Array();//редко используется
let arr2 = [];
//Значения массивов----------------
let arrOne = [
	'Ваня',
	'Иштан',
	'Оля',
];
//Разные типы значений------------------------
let arrOnen = ['Ваня', 'Иштан', 'Оля',];
let arrTwo = [
	'Коля',
	{
		type: "JS",
		age: 36
	},
	true,
	function () {
		console.log('Привет, я Коля');
	}
];
//Многомерные массивы--------------------------
let matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
];
//получение массива------------------------
console.log(arrOne[1]);
console.log(arrTwo);
//arrTwo[0] - положение 1-------------
console.log(arrTwo[0]);
//arrTwo[1].type - получение значения свойств, где type - ключ объекта--------------
console.log(arrTwo[1].type);
//arrTwo[2] - положение 3
console.log(arrTwo[2]);
//вызов функции массива---------------------
arrTwo[3]();
console.log(matrix);
console.log(matrix[0]);
//первое значение - номер строки массива, второе - позиция элемента в массиве строки
console.log(matrix[0][1]);
//длина массива - число элементов массива-----------------------
console.log(arrTwo.length);
//копирование массива по ссылке---------------------------------
let arrFour = [
	'Ваня',
	'Иштан',
	'Оля',
];

let arrNew = arrFour;//объявляем новую переменную и просваиваем массив
arrNew.length = 2;//укарачиваем массив
console.log(arrFour);
//изменение  массива
arrNew[0] = 'Вася';//замена значения элемента
arrNew[2] = 'Петя';//добавление элемента
arrNew[3] = 'Юля';

console.log(arrFour);//['Вася', 'Иштан', 'Петя', 'Юля']

//методы массивов====================================

// метод Push - добавляет элемент в конец массива
arrNew.push('Костя', 'Антон');
console.log(arrNew);//['Вася', 'Иштан', 'Петя', 'Юля', 'Костя', 'Антон']

// метод shift - удаляет первый элемент в начале массива
arrNew.shift();
console.log(arrNew);//['Иштан', 'Петя', 'Юля', 'Костя', 'Антон']

// метод pop - удаляет последний элемент в массиве
arrNew.pop();
console.log(arrNew);//['Иштан', 'Петя', 'Юля', 'Костя']

// метод unshift - добавляет элемент в начало массива
arrNew.unshift('Наташа');
console.log(arrNew);//['Наташа', 'Иштан', 'Петя', 'Юля', 'Костя']

// метод unshift - добавляет элемент в начало массива
arrNew.unshift('Слава', 'Виталик');
console.log(arrNew);//['Слава', 'Виталик', 'Наташа', 'Иштан', 'Петя', 'Юля', 'Костя']

// метод splice - добавление, удаление, изменение элементов===============
// удаление элемента
let arr10 = ['Ваня', 'Иштан', 'Оля',];
arr10.splice(1, 1);
console.log(arr10);//['Ваня', 'Оля']

// удаление элемента и возвращение его в переменную
let arr11 = ['Ваня', 'Иштан', 'Оля',];
let remove = arr11.splice(1, 1);
console.log(remove);//['Иштан']

// заменяем элемента
let arr12 = ['Ваня', 'Иштан', 'Оля',];
arr12.splice(0, 1, 'Коля');
console.log(arr12);//['Коля', 'Иштан', 'Оля']

// добавляем элемента
let arr13 = ['Ваня', 'Иштан', 'Оля',];
arr13.splice(1, 0, 'Коля', 'Света');
console.log(arr13);//['Ваня', 'Коля', 'Света', 'Иштан', 'Оля']

// удаление элемента с конца
let arr14 = ['Ваня', 'Иштан', 'Оля',];
arr14.splice(-1, 1);
console.log(arr14);//['Ваня', 'Иштан']

//slice - создание нового массива, копирование его части или весь массив

let arr15 = ['Ваня', 'Иштан', 'Оля',];

let arr16 = arr15.slice(1, 2);
console.log(arr16);//['Иштан']

let arr17 = arr15.slice(-2, -1);
console.log(arr17);//['Иштан']

let arr18 = arr15.slice();
console.log(arr18);//['Ваня', 'Иштан', 'Оля']

//concat - создание нового массива, копирование его данных и доп знач в конец массива
let arr20 = ['Ваня', 'Иштан', 'Оля',];
let arr21 = arr20.concat('Соня');
console.log(arr21);//['Ваня', 'Иштан', 'Оля', 'Соня']


//поиск indexOf/lastIndexOf/includes
let new222 = ['Ваня', 'Иштан', 'Оля',];
console.log(new222.indexOf('Иштан'));//1
console.log(new222.indexOf('Вася'));//-1
console.log(new222.indexOf('Иштан', 2));//-1
console.log(new222.lastIndexOf('Иштан'));//1
console.log(new222.includes('Иштан'));//true
console.log(new222.includes('Вася'));//false
console.log(new222.includes('Иштан', 2));//false
console.log(new222.lastIndexOf('Иштан', 2));//1

//поиск в массиве find и findIndex с условием================
let newAge = [
	{ name: 'Вася', age: 36 },
	{ name: 'Коля', age: 18 },
	{ name: 'Оля', age: 'Не скажу' },
]
//функция поиска
let resultOne = newAge.find(function (item, index, array) {
	return item.age === 18;
});
console.log(resultOne);//{name: 'Коля', age: 18}
//стрелочная функция поиска find
let resultTwo = newAge.find(item => item.age === 18);
console.log(resultTwo);//{name: 'Коля', age: 18}

//стрелочная функция поиска findIndex - позиция элемента
let resultThree = newAge.findIndex(item => item.age === 18);
console.log(resultThree);//1

//поиск в массиве filter =======================================
let newFilter = [
	{ name: 'Вася', age: 36 },
	{ name: 'Коля', age: 18 },
	{ name: 'Оля', age: 'Не скажу' },
]
let resultFour = newFilter.filter(function (item, index, array) {
	return item.age >= 18;
});
console.log(resultFour);//	{ name: 'Вася', age: 36 }, {name: 'Коля', age: 18}

//сортировка в массиве sort() =======================================
//сортировка в массиве строк 
let arrSort = ['Иштан', 'Ваня', 'Соня', 'Оля'];
console.log(arrSort.sort());//['Ваня', 'Иштан', 'Оля', 'Соня']
//сортировка в массиве чисел 
let arrNumber = [8, 22, 1];
console.log(arrNumber.sort());// [1, 22, 8]
//сортировка в массиве чисел функция стрелочная 
console.log(arrNumber.sort((a, b) => a - b));// [1, 8, 22]
//сортировка в массиве чисел функция
let arrItem = [5, 54, 48, 0, 55, 49, 33, 8, 22, 1];

function compareNumeric(a, b) {
	console.log(`Сравниваем ${a} и ${b}`);
	if (a > b) return 1;
	if (a == b) return 0;
	if (a < b) return -1;
}
console.log(arrItem.sort(compareNumeric));// [0, 1, 5, 8, 22, 33, 48, 49, 54, 55]
//сортировка в массиве reverse =======================================
let arrReverse = ['Иштан', 'Ваня', 'Соня', 'Оля'];
console.log(arrReverse.sort());//['Ваня', 'Иштан', 'Оля', 'Соня']
console.log(arrReverse.reverse());//['Соня', 'Оля', 'Иштан', 'Ваня']

//преобразование в массиве =======================================
//map
let arrMap = ['Иштан', 'Ваня', 'Соня', 'Оля'];
let resultMap = arrMap.map(function (item, index, array) {
	return item[0];
});
console.log(arrMap);// ['Иштан', 'Ваня', 'Соня', 'Оля']
console.log(resultMap);// ['И', 'В', 'С', 'О']
//split строка в массив
let arrSplit = 'Иштан,Ваня,Соня,Оля';
let resultSplit = arrSplit.split(',');
console.log(resultSplit);//['Иштан', 'Ваня', 'Соня', 'Оля']
//join массив в строку
let arrJoin = ['Иштан', 'Ваня', 'Соня', 'Оля'];
let resultJoin = arrJoin.join(',');
console.log(resultJoin);//Иштан,Ваня,Соня,Оля
let resultJoin_2 = arrJoin.join(' ; ');
console.log(resultJoin_2);//Иштан ; Ваня ; Соня ; Оля - мб любой разделитель

//проверка массив или объект Array.is Array()=========================
let arrArray = ['Иштан', 'Ваня', 'Соня', 'Оля'];
let Name = { name: 'Коля', age: 18 };
console.log(typeof arrArray);//object
console.log(typeof Name);//object

if (Array.isArray(arrArray)) {
	console.log('Это массив!');
} else {
	console.log('Это не массив!');
}//Это массив!

if (Array.isArray(Name)) {
	console.log('Это массив!');
} else {
	console.log('Это не массив!');
}//Это не массив!

//Методы перебора массива=====================================================
//цикл FOR============
let arrFor = ['Иштан', 'Ваня', 'Соня', 'Оля'];
console.log(arrFor.length);

for (let i = 0; i < arrFor.length; i++) {
	console.log(arrFor[i]);
}//Иштан Ваня Соня Оля - 4 строки

//цикл FOR..OF===============
let arrForOf = ['Иштан', 'Ваня', 'Соня',];
console.log(arrFor.length);

for (let arrItem of arrForOf) {
	console.log(arrItem);
}//Иштан Ваня Соня

//forEach=======================
let arrForEach = ['Иштан', 'Ваня', 'Соня',];
arrForEach.forEach(function (item, index, array) {
	console.log(`${item} находится на ${index} позиции в ${array}`)
});
//Иштан находится на 0 позиции в Иштан,Ваня,Соня
//Ваня находится на 1 позиции в Иштан,Ваня,Соня
//Соня находится на 2 позиции в Иштан,Ваня,Соня

//forEach функция отдельно=======================
let arrEach = ['Иштан', 'Ваня', 'Соня',];
arrEach.forEach(show);

function show(item) {
	console.log(item);
}//Иштан Ваня Соня

//reduce====================================
let arrReduce = [1, 2, 3, 4];
let reduceValueOne = arrReduce.reduce(function (previousValue, item, index, array) {
	return item + previousValue;
}, 0); // 0- начальное значение
console.log(reduceValueOne);//сумма всех элементов

//reduceRight====================================
let arrReduceRight = [1, 2, 3, 4];
let reduceValueTwo = arrReduce.reduceRight(function (previousValue, item, index, array) {
	return item + previousValue;
}, 2); // 2- начальное значение
console.log(reduceValueTwo);//сумма всех элементов

//============================================================================
//Д / З
//1
let arrExample = ['Иштан', 'Ваня', 'Соня',];
console.log(arrExample);//['Иштан', 'Ваня', 'Соня']
let newArrExample = arrExample;//копирование массива
console.log(newArrExample);//['Иштан', 'Ваня', 'Соня']
newArrExample.push('Петя');//добавляет элемент в конце
console.log(newArrExample);//['Иштан', 'Ваня', 'Соня', 'Петя']
console.log(arrExample.length);//4

//2
let users = ['Ваня', 'Иштан',];

users.push('Оля');//добавляет элемент в конце
console.log(users);//['Ваня', 'Иштан', 'Оля']

users[0] = 'Петя';//заменяет элемент в массиве
console.log(users);//['Петя', 'Иштан', 'Оля']


let resultUsers = users.find(function (item, index, array) {
	return index === 1;
});
console.log(resultUsers);//Иштан

users.shift();//удаляет 1-й элемент в начале массива
console.log(users);// ['Иштан', 'Оля']

users.unshift('Катя');//добавляет элемент в начало
console.log(users);// ['Катя', 'Иштан', 'Оля']

let removedUsers = users.splice(0, 1);
console.log(removedUsers);// ['Катя'] - удаленный элемент
console.log(users);// ['Иштан', 'Оля'] - массив после удаления

users.splice(0, 0, 'Маша', 'Паша'); //добавляет 2 эл  в начале
console.log(users);// ['Маша', 'Паша', 'Иштан', 'Оля']

//3
let arrName = ['Иштан', 'Ваня', 'Соня',];
console.log(arrName);// ['Иштан', 'Ваня', 'Соня']

let removedName = arrName.splice(1, 1); //удаление элемента Ваня
console.log(removedName);// ['Ваня'] вывод его в переменную
console.log(arrName);//  ['Иштан', 'Соня']

//4
let string = 'Иштан,Ваня,Соня,Оля';
let newString = string.split(',');
console.log(newString);// ['Иштан', 'Ваня', 'Соня', 'Оля']


//====================================================================================================================
//====================================================================================================================






//MAP====================================================================================================================
//map - функция при вызове в массив позволяет нам изменять каждое значение и сохранять его в новом массиве
//синтаксис - arrayName.map()
//внутри map передаем функцию чтобы сообщить как изменять элемент массива
//element, index - параметры , могут быть названы любым именем
//В функции дб return
const fahrengeit = [72, 68, 70, 74, 77, 75, 79];
const celsius = fahrengeit.map(function (element, index) {
	return element + " - " + index;
});
console.log(celsius);

//Упрощенный синтаксис с помощью стрелочной функции--(значение , индекс)--------------------------------------
const state = ['ak', 'md', 'va', 'ca', 'or'];
const uppercaseStates = state.map((element) => element.toUpperCase());
console.log(uppercaseStates);//['AK', 'MD', 'VA', 'CA', 'OR']

const prices = [1.99, 2.49, 0.99, 4.99];
const taxed = prices.map(price => price * 1.1);
console.log("Массив prices + 10%:");
console.log(taxed);


//FILTER====================================================================================================================
//Filter - создает новый массив по условию
const names = ["Tony", "Tania", "Vince", "Terry"];
const T = names.filter(element => (element[0] === "T"));
console.log(T);

//-------------------
const customerTotals = [99.56, 78, 110, 29, 58];
/* 
const largeOrder = customerTotals.filter(function (total) {
	return total > 80;
})
console.log(largeOrder);
 */

function getLargeOrder(array, minPrice = 80) {
	let largeOrder = array.filter(function (total) {
		return total > minPrice;
	})
	console.log(largeOrder);
}
getLargeOrder(customerTotals, 60);
getLargeOrder(customerTotals);

//-----------------------------------------------------------
const finishers = ["Sarah", "Sally", "Jake", "Alex", "Tori"];
const top3 = finishers.filter(function (name, index) {
	return index < 3;
})
console.log(top3);

//REDUCE====================================================================================================================
//reduce - как объединить элементы массива
//параметры: предыдущее значение уменьшения и текущее значение массива
//сумма элементов массива с помощью встроенной функции
const cookieOrders = [20, 21, 5, 12, 13];
const totalCookie = cookieOrders.reduce(function (prevVAl, currVal) {
	return prevVAl + currVal;
})
console.log(totalCookie);

//сумма элементов массива с помощью стрелочной функции

let sales = [250, 125, 465];
let salesTotal = sales.reduce((prev, curr) => prev + curr);
console.log(salesTotal);



let visitors = ["Christina", "Andrew", "Chris", "Delia"];
let C = visitors.filter(function (element) {
	return element[0] == "C";
});
console.log(C);
