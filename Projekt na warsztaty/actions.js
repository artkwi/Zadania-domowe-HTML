var ArrayObjects [];



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


function reload() {
		positiontList = document.querySelectorAll('.unordered-list li');
		console.log(positiontList);
		var i = 0;
		for (i = 0; i< positiontList.length ; i++) {
			positiontList[i].Id = i;
			positiontList[i].firstChild.nextSibling.addEventListener('click',removeElement,false);
			console.log(positiontList[i].firstChild.nextSibling);
			console.log(positiontList[i].Id);
		}
		console.log(positiontList);
}



function removeElement (e) {
	var positionThisButton = e.target.Id;
	positiontList[positionThisButton].parentNode.removeChild(positiontList[positionThisButton]);
	
}

reload();