var daysOfWeek = ['niedziela', 'poniedzia�ek', 'wtorek', '�roda', 'czwartek', 'pi�tek', 'sobota'];
var months = ['stycze�', 'luty', 'marzec', 'kwiecie�', 'maj', 'czerwiec', 'lipiec', 'sierpie�', 'wrzesie�', 'pa�dziernik', 'listopad', 'grudzie�'];
var monthsConjugation = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'wrze�nia', 'pa�dziernika', 'listopada', 'grudnia'];


var d = new Date();
var today = daysOfWeek[d.getDay()];
today = today + " " + d.getDate();
today = today + " " + monthsConjugation[d.getMonth()];
today = today + " " + d.getFullYear() + " r.";

var el1 = document.getElementById('heading');
el1.innerHTML = "Artur Kwiatkowski";

el1 = document.getElementById('paragraph-one');
el1.innerHTML = "Data, kt�ra pojawi si� przy otwarciu tej strony to: " + today ;
