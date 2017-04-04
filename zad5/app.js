var daysOfWeek = ['niedziela', 'poniedzia³ek', 'wtorek', 'œroda', 'czwartek', 'pi¹tek', 'sobota'];
var months = ['styczeñ', 'luty', 'marzec', 'kwiecieñ', 'maj', 'czerwiec', 'lipiec', 'sierpieñ', 'wrzesieñ', 'paŸdziernik', 'listopad', 'grudzieñ'];
var monthsConjugation = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'wrzeœnia', 'paŸdziernika', 'listopada', 'grudnia'];


var d = new Date();
var today = daysOfWeek[d.getDay()];
today = today + " " + d.getDate();
today = today + " " + monthsConjugation[d.getMonth()];
today = today + " " + d.getFullYear() + " r.";

var el1 = document.getElementById('heading');
el1.innerHTML = "Artur Kwiatkowski";

el1 = document.getElementById('paragraph-one');
el1.innerHTML = "Data, która pojawi siê przy otwarciu tej strony to: " + today ;
