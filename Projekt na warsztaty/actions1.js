// znalezienie obiekt�w
var arrayObjects = [];
var listGet = document.querySelectorAll('.unordered-list li');
var listGetParent = document.querySelector('.unordered-list');
console.log(listGetParent);

// dodanie nas�uchu na przycisk
var elementAddButton = document.querySelector('button');
elementAddButton.addEventListener('click',addElement,false);

// dodawanie zadania
function addElement() {
	var taskContent = document.getElementsByName('text-zadanie');
	var arrayLength = arrayObjects.length;
	// zapisanie zadania do tablicy obiekt�w
	arrayObjects.push({
		content: taskContent[0].value,
		isDone: false
	});
	
	
	console.log(listGet[0].firstChild.firstChild);
	console.log(listGet[0].firstChild.nextSibling);
	reloadElements();
}

// usuni�cie i ponowne za�adowanie element�w
function reloadElements() {
	// usuni�cie element�w z ekranu
	while (listGetParent.hasChildNodes()) {
		listGetParent.removeChild(listGetParent.firstChild);
		console.log("kot");
	}
	
	// dodanie element�w z tablicy na ekranu
	for (var i=0 ; i<arrayObjects.length ; i++) {
		var liElement 		= document.createElement('li');
		var removeButton 	= document.createElement('input');
		var checkBox		= document.createElement('input');
		var textNode		= document.createTextNode(arrayObjects[i].content);
		removeButton.setAttribute("type", "Button");
		removeButton.setAttribute("value", "Usu�");
		checkBox.setAttribute("type", "checkbox");
		liElement.appendChild(removeButton);
		liElement.appendChild(checkBox);
		liElement.appendChild(textNode);
		listGetParent.appendChild(liElement);
		
		
	}
}
//listGet = document.querySelectorAll('.unordered-list li');