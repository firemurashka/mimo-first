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
const uppercaseStates= state.map((element)=>element.toUpperCase());
console.log(uppercaseStates);//['AK', 'MD', 'VA', 'CA', 'OR']