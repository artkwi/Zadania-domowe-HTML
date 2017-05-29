var elementAddButton = document.querySelector('button');
elementAddButton.addEventListener('click',addElement,false);

function addElement() {
	var positiontList = document.querySelector(".unordered-list");
	var newElementLi = document.createElement('li');
	var newText = document.createTextNode('Treść zadania');
	newElementLi.appendChild(newText);
	positiontList.appendChild(newElementLi);
	console.log('Działa!');
}

//addElement();