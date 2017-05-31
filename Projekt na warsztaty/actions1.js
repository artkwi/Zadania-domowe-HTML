// znalezienie obiekt�w
var arrayObjects = [];
var listGet = document.querySelectorAll('.unordered-list li');
var listGetParent = document.querySelector('.unordered-list');

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
	
	reloadElements();
}

// usuni�cie i ponowne za�adowanie element�w
function reloadElements() {
	// usuni�cie element�w z ekranu
	while (listGetParent.hasChildNodes()) {
		listGetParent.removeChild(listGetParent.firstChild);
	}
	
	// dodanie element�w z tablicy na ekranu
	for (var i=0 ; i<arrayObjects.length ; i++) {
		var liElement 		= document.createElement('li');
		var removeButton 	= document.createElement('input');
		var checkBox		= document.createElement('input');
		var textNode		= document.createTextNode(arrayObjects[i].content);
		removeButton.setAttribute("id", i)
		removeButton.setAttribute("type", "Button");
		removeButton.setAttribute("value", "Usu�");
		checkBox.setAttribute("type", "checkbox");
		checkBox.checked = arrayObjects[i].isDone;
		//checkBox.setAttribute("checked", arrayObjects[i].isDone) - ten zapis nie dzia�a� poprawnie
		checkBox.setAttribute("id", i);
		liElement.appendChild(removeButton);
		liElement.appendChild(checkBox);
		liElement.appendChild(textNode);
		listGetParent.appendChild(liElement);
		
		removeButton.addEventListener('click',removeElement,false);
		checkBox.addEventListener('click',checkBoxFunction,false);
	}
}

// usuwanie element�w 
function removeElement(event) {
	var target = event.target;
	//console.log(target.id);
	arrayObjects.splice(target.id,1);
	//console.log(arrayObjects);
	reloadElements();
}

function checkBoxFunction(event) {
	var target = event.target;
	arrayObjects[target.id].isDone = target.checked;
	console.table(arrayObjects);	
}
