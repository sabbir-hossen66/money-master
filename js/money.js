/* id call */
let income = document.getElementById('income');
let btnCalculate = document.getElementById('calculate');
let food = document.getElementById('food');
let rent = document.getElementById('rent');
let clothes = document.getElementById('clothes');
let totalExpenses = document.getElementById('totoal-expenses');
let balance = document.getElementById('balance');
let remBalance = document.getElementById('rem-balance');
let persent = document.getElementById('persent');
let save = document.getElementById('save');
let saveAmount = document.getElementById('save-amount');
let Remaining = document.getElementById('rem-balance');
let allInput = parseInt(document.querySelectorAll('input'));


/* click handeler... */
btnCalculate.addEventListener('click', calculateHandler);

/* This is a function */

function calculateHandler() {


    let spendForFood = parseInt(food.value);
    let spendForRent = parseInt(rent.value);
    let spendForClothse = parseInt(clothes.value);
    let myIncome = parseInt(income.value);



    let totalSpend = spendForFood + spendForClothse + spendForRent;

    totalExpenses.innerText = totalSpend;

    let newBalance = myIncome - totalSpend;
    balance.innerText = newBalance;

    return newBalance;


};


save.addEventListener('click', saveMoney);

function saveMoney() {


    let myIncome = parseInt(income.value);
    let numpersent = parseInt(persent.value);


    let persentage = myIncome / 100;

    let finulSaveAmmount = persentage * numpersent;

    /* Error type messege */

    if (finulSaveAmmount <= calculateHandler()) {
        saveAmount.innerText = finulSaveAmmount;

        Remaining.innerText = calculateHandler() - finulSaveAmmount;
    }
    else {
        alert("sorry!! you don't have any sufficency blance")
    };


};