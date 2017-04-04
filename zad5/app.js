var daysOfWeek = ['niedziela', 'poniedzia�ek', 'wtorek', '�roda', 'czwartek', 'pi�tek', 'sobota'];
var months = ['stycze�', 'luty', 'marzec', 'kwiecie�', 'maj', 'czerwiec', 'lipiec', 'sierpie�', 'wrzesie�', 'pa�dziernik', 'listopad', 'grudzie�'];
var monthsConjugation = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'wrze�nia', 'pa�dziernika', 'listopada', 'grudnia'];


var d = new Date();
var today = daysOfWeek[d.getDay()];
today = today + " " + d.getDate();
today = today + " " + monthsConjugation[d.getMonth()];
today = today + " " + d.getFullYear() + " r.";

var todayTime = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + ":" + d.getMilliseconds();



// 1
var el1 = document.getElementById('heading');
el1.innerHTML = "Artur Kwiatkowski";

el1 = document.getElementById('paragraph-one');
el1.innerHTML = "Data, kt�ra pojawi si� przy otwarciu tej strony to: " + today +
"<br />Godzina w momencie otwarcia strony: " + todayTime;

// 2
var sentence = "Podstaw� szcz�cia jest wolno��, a podstaw� wolno�ci odwaga.";


el1 = document.getElementById('paragraph-two');
el1.innerHTML = "Trzynastym znakiem w tym zdaniu jest: " + sentence.charAt(13) +
"<br />Znaki pomi�dzy 7. a 12. pozycj� to: " + sentence.substring(7,12) +
"<br />Pierwszy raz znak '�' pojawia si� na miejscu: " + sentence.indexOf("�") + 
"<br />Ten ci�g ma " + sentence.length +" znak�w." +
"<br />Po zamianie 'podstaw�' na 'fundamentem' mamy: " +  sentence.replace('podstaw�','fundamentem') +
"<br />Cz�� zdania przed przecinkiem to: " + sentence.substring(0,sentence.indexOf(",")) +
"<br />Druga cz�� zdania po odwr�ceniu to: " + sentence.substring(sentence.indexOf(",")+1,sentence.length).split(" ").reverse().join(" ");

// 3
var delta = Math.pow(5,2) - 4*1*6;
var x1 = (-5- Math.sqrt(delta))/2;
var x2 = (-5+ Math.sqrt(delta))/2;

el1 = document.getElementById('paragraph-three');
el1.innerHTML = "Wyr�nik tego tr�jmianu to: " + delta +
"<br />Pierwiastek kwadratowy tego wyr�nika to: "+ Math.sqrt(delta) +
"<br />Miejscami zerowymi tej funkcji s�: " + x1 + " i " +x2;