
//getElementById=====================================================================================================================

//В HTML добавляем атрибур клика с вызовом функции onclick="show()" и id="secret" для изменяемого текста
//document--получаем доступ к странице с помощью document
//getElementById--взаимодействуем с элементом с помощью инструкции getElementById
//"secret"--Внутри инструкции помещаем индификатор элементас которым хотим взаимодеействовать в кавычках!!! дб  уникальным
//innerHTML--инструкция, получаем доступ к тексту p
//= --присваеваем другое значение полученному элементу

//Изменаем текст элемента при клике на кнопку ------------------
function show() {
	document.getElementById("secret").innerHTML = "not telling you!";
}

//Изменаем текст элемента с помощью переменных-------------------
const text = document.getElementById("text");
console.log(text.innerHTML);//Yes text
text.innerHTML = "No text";
console.log(text.innerHTML);//No text
//==================================================================================================================================

//querySelector=====================================================================================================================

//querySelector- Получение отдельного элемента HTML - только первого найденого
//(работает со всеми классами - перед классом ., тэгами и id- перед id пишем #)
//класс  class="block-id" - пишем ".block-id"
//индификатор  id="text"  - пишем "#text"
//теги (p, h1, h2 и тд)   - пишем "h1"  "ul"
//тег и класс:p и class="block-id"  - пишем "p.block-id"
//2 класса: class="prompt update"  - пишем ".prompt.update"

function publish() {
	const el = document.querySelector("h2");
	console.log(el.innerHTML);
	el.innerHTML = "Title";
	console.log(el.innerHTML);
}
publish();
//==================================================================================================================================

//getElementsByTagName=====================================================================================================================
//Получение коллекции элементов. Коллекции похожи на массивы, они работают с индексами начинающимися с 0
const el = document.getElementsByTagName("li");

//Получаем длунну коллекции ---------------------------
function displayItemDiv() {
	const div = document.querySelector(".block-id__div");
	div.innerHTML = el.length;
}
//Получаем значение элемента коллекции по индексу---------------
function displayItemP() {
	const p = document.querySelector(".block-id__p");
	p.innerText = el[0].innerHTML;
}
//==================================================================================================================================

//getElementsByClassName=====================================================================================================================
//Возврат коллекции содержащая определенные элемента класса
function displayClass() {
	const el = document.getElementsByClassName("urgent");
	const p = document.querySelector(".block-id__urgent");
	p.innerText = "You have " + el.length + " urgent tasks";
}

//доступ к элементам имеющим более 1 класса
function displayClasses() {
	const el = document.getElementsByClassName("urgent important");
	const p = document.querySelector(".block-id__urgent-important");
	p.innerText = el.length;
}

//setAttribute================================================================
//перезаписывает класс элемента
function turnBold() {
	const el = document.querySelector("#turn");
	el.setAttribute("class", "bold");
	console.log(el);
}

function turnItalic() {
	const el = document.querySelector("#turn");
	el.setAttribute("class", "italic");
}

//classList =======================================================================================
//добавление или удаление свойства
//add--добавление класса----------------------------------
function addBold() {
	const el = document.querySelector("#add");
	el.classList.add("bold");
}

//remove - -удаление класса----------------------------------
function removeBold() {
	const el = document.querySelector("#add");
	el.classList.remove("bold");
}
//toggle - -добавление и удаление класса----------------------------------
function toggleBold() {
	const el = document.querySelector("#add");
	el.classList.toggle("bold");
}

//add--добавление нескольких классов----------------------------------
function addclasses() {
	const el = document.querySelector("#add");
	el.classList.add("highlight", "underline");
}

//Замена атрибута src-------------------------------------------------------------------------
function show(){
	const el = document.querySelector("#dessert");
el.src="img/page/dessert02.jpeg";
}