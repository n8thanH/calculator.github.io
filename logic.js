const disp = document.getElementById('display');
const reset = document.getElementById('reset');
const neg = document.getElementById('neg');
const divide = document.getElementById('divide');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const mult = document.getElementById('mult');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const subt = document.getElementById('subt');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const addit = document.getElementById('addit');
const zero = document.getElementById('zero');
const decim = document.getElementById('decim');
const equal = document.getElementById('equal');
const percent = document.getElementById('percent');

reset.addEventListener('click', () => clear());
neg.addEventListener('click', () => showNum('-'));
divide.addEventListener('click', () => showNum('/'));
seven.addEventListener('click', () => showNum('7'));
eight.addEventListener('click', () => showNum('8'));
nine.addEventListener('click', () => showNum('9'));
mult.addEventListener('click', () => showNum('*'));
four.addEventListener('click', () => showNum('4'));
five.addEventListener('click', () => showNum('5'));
six.addEventListener('click', () => showNum('6'));
subt.addEventListener('click', () => showNum('-'));
one.addEventListener('click', () => showNum('1'));
two.addEventListener('click', () => showNum('2'));
three.addEventListener('click', () => showNum('3'));
addit.addEventListener('click', () => showNum('+'));
zero.addEventListener('click', () => showNum('0'));
decim.addEventListener('click', () => showNum('.'));
equal.addEventListener('click', () => evaluate());
percent.addEventListener('click', () => perc());

disp.value = '';

function evaluate() {    
    let x = disp.value;
    let y = eval(x);
    disp.textContent = y;
    disp.value = y;
}

function showNum(val) {
    disp.value += val;
    disp.textContent = disp.value;
}

function clear() {
    disp.textContent = '';
    disp.value = '';
}

function perc() {
    let x = parseFloat(disp.value);
    x = x / 100;
    disp.value = x;
    disp.textContent = x;
}