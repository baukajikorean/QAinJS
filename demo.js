var one = prompt('Please, spell "five"" 1) f-i-v-e 2) f-a-y-v');
var two = prompt('What was Jackson\'s name? 1) Michael 2) Michel');
var answers = 0;

function firstFunction() {
if (one == 1) answers += 1; else document.write('First answer is wrong<br />');};

function secondFunction() {
if (two == 1) answers += 1; else document.write('Second answer is wrong<br />');};

function thirdFunction() {

if (answers == 2) document.write('You are very clever!'); else if (answers == 1) document.write('Not bad!'); else document.write('So unlucky!')};

firstFunction();
secondFunction();
thirdFunction();
