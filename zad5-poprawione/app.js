var daysOfWeek = ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'];
var months = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'];
var monthsConjugation = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia'];


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
el1.innerHTML = "Data, która pojawi się przy otwarciu tej strony to: " + today +
"<br />Godzina w momencie otwarcia strony: " + todayTime;

// 2
var sentence = "Podstawą szczęścia jest wolność, a podstawą wolności odwaga.";


el1 = document.getElementById('paragraph-two');
el1.innerHTML = "Trzynastym znakiem w tym zdaniu jest: " + sentence.charAt(13) +
"<br />Znaki pomiędzy 7. a 12. pozycją to: " + sentence.substring(7,12) +
"<br />Pierwszy raz znak 'ą' pojawia się na miejscu: " + sentence.indexOf("ą") + 
"<br />Ten ciąg ma " + sentence.length +" znaków." +
"<br />Po zamianie 'podstawą' na 'fundamentem' mamy: " +  sentence.replace('podstawą','fundamentem') +
"<br />Część zdania przed przecinkiem to: " + sentence.substring(0,sentence.indexOf(",")) +
"<br />Druga część zdania po odwróceniu to: " + sentence.substring(sentence.indexOf(",")+1,sentence.length).split(" ").reverse().join(" ");

// 3
var delta = Math.pow(5,2) - 4*1*6;
var x1 = (-5- Math.sqrt(delta))/2;
var x2 = (-5+ Math.sqrt(delta))/2;

el1 = document.getElementById('paragraph-three');
el1.innerHTML = "Wyróżnik tego trójmianu to: " + delta +
"<br />Pierwiastek kwadratowy tego wyróżnika to: "+ Math.sqrt(delta) +
"<br />Miejscami zerowymi tej funkcji są: " + x1 + " i " +x2;

// 4
var x = Math.PI/6;
var liczba = Math.sqrt(Math.abs(Math.sin(Math.log(Math.pow(2.0,x))) + Math.max(0.0,x) + Math.abs(Math.pow(-Math.E,2.0*x) + Math.min(-1.0,x))));
l1 = document.getElementById('paragraph-four');
el1.innerHTML = "Zadanie 2. Obliczam wartość funkcji:" +
"<br /> " + 'f(x) = sqrt(|sin(ln(2^(x))) + max(0, x) + |-e^(2x) + min(-1, x)||)' +
"<br />dla x = pi/6." +
"<br />Mój wynik to: liczba = " + liczba +
"<br />Wynik w notacji wykładniczej to: (liczba w notacji wykładniczej)." +
"<br />Po zaokrąleniu wyniku w górę mam: " + Math.ceil(liczba);