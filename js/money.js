const btnCalculate = document.getElementById('calculate');
const income = document.getElementById('income');
const food = document.getElementById('food');
const rent = document.getElementById('rent');
const clothes = document.getElementById('clothees');
const totoalExprese = document.getElementById('totoal-exprese');
const balance = document.getElementById('balance');
const remBalance = document.getElementById('rem-balance');
const persent = document.getElementById('persent');
const save = document.getElementById('save');
const saveAmount = document.getElementById('save-amount');
const Remaining = document.getElementById('rem-balance');
const allInput = parseInt(document.querySelectorAll('input'));

btnCalculate.addEventListener('click', calculateHandler); 