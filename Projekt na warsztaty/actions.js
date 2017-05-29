var elementAddButton = document.querySelector('button');
elementAddButton.addEventListener('click',addElement,false);

function addElement() {
	var positiontList = document.querySelector(".unordered-list");
	var newElementLi = document.createElement('li');
	var newElementButton = document.createElement('button');
	var newTextButton = document.createTextNode('Usuń');
	var newElementCheckbox = document.createElement('input');
	newElementCheckbox.type = "checkbox";
	var newElementTextBox = document.getElementsByName('text-zadanie');
	var newText = document.createTextNode(newElementTextBox[0].value);
	//console.log(newElementTextBox[0].value);
	
	newElementLi.appendChild(newElementButton);
	newElementLi.appendChild(newElementCheckbox);
	newElementButton.appendChild(newTextButton);
	positiontList.appendChild(newElementLi);
	newElementLi.appendChild(newText);
	console.log('Działa!');
}

