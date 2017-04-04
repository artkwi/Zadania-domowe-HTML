var daysOfWeek = ['niedziela', 'poniedzia³ek', 'wtorek', 'œroda', 'czwartek', 'pi¹tek', 'sobota'];
var months = ['styczeñ', 'luty', 'marzec', 'kwiecieñ', 'maj', 'czerwiec', 'lipiec', 'sierpieñ', 'wrzesieñ', 'paŸdziernik', 'listopad', 'grudzieñ'];
var monthsConjugation = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'wrzeœnia', 'paŸdziernika', 'listopada', 'grudnia'];


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
el1.innerHTML = "Data, która pojawi siê przy otwarciu tej strony to: " + today +
"<br />Godzina w momencie otwarcia strony: " + todayTime;

// 2
var sentence = "Podstaw¹ szczêœcia jest wolnoœæ, a podstaw¹ wolnoœci odwaga.";


el1 = document.getElementById('paragraph-two');
el1.innerHTML = "Trzynastym znakiem w tym zdaniu jest: " + sentence.charAt(13) +
"<br />Znaki pomiêdzy 7. a 12. pozycj¹ to: " + sentence.substring(7,12) +
"<br />Pierwszy raz znak '¹' pojawia siê na miejscu: " + sentence.indexOf("¹") + 
"<br />Ten ci¹g ma " + sentence.length +" znaków." +
"<br />Po zamianie 'podstaw¹' na 'fundamentem' mamy: " +  sentence.replace('podstaw¹','fundamentem') +
"<br />Czêœæ zdania przed przecinkiem to: " + sentence.substring(0,sentence.indexOf(",")) +
"<br />Druga czêœæ zdania po odwróceniu to: " + sentence.substring(sentence.indexOf(",")+1,sentence.length).split(" ").reverse().join(" ");

// 3
var delta = Math.pow(5,2) - 4*1*6;
var x1 = (-5- Math.sqrt(delta))/2;
var x2 = (-5+ Math.sqrt(delta))/2;

el1 = document.getElementById('paragraph-three');
el1.innerHTML = "Wyró¿nik tego trójmianu to: " + delta +
"<br />Pierwiastek kwadratowy tego wyró¿nika to: "+ Math.sqrt(delta) +
"<br />Miejscami zerowymi tej funkcji s¹: " + x1 + " i " +x2;