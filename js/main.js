//Variables from HTML:
const k2 = document.querySelector('.k2');
const k3 = document.querySelector('.k3');
const k4 = document.querySelector('.k4');
const k6 = document.querySelector('.k6');
const k8 = document.querySelector('.k8');
const k10 = document.querySelector('.k10');
const k12 = document.querySelector('.k12');
const k20 = document.querySelector('.k20');
const k100 = document.querySelector('.k100');
const resultHolder = document.querySelectorAll('.result');

const sum = document.querySelector('.sum');
const last = document.querySelector('.last');

const clicker = document.querySelector('.click');
const refresh = document.querySelector('.refresh');

//Variables for JS:
let click = 0;
let sumup = 0;
const lastThrow = [];


clicker.textContent = `${click}`;

//Function:
const doOperation = (result) => {
    clicker.textContent = `${++click}`;
    sum.textContent = `${sumup += result}`;
    lastThrow.push(result);

    if (lastThrow[lastThrow.length - 2] == undefined) {
        last.textContent = `-`;
    } else {
        last.textContent = `${lastThrow[lastThrow.length - 2]}`;
    }
}


const normalWeightOfResult = () => {
    for (let i = 0; i < resultHolder.length; i++) {
        resultHolder[i].style.fontWeight = `normal`;
        resultHolder[i].style.color = `white`;
    }
}

//Events for buttons:
refresh.addEventListener('click', () => {
    resultHolder.forEach((item) => {
        item.textContent = ``;
    })
    clicker.textContent = `0`;
    sum.textContent = `-`;
    last.textContent = `-`;
    click = 0;
    sumup = 0;
    lastThrow.splice(0);
})

k2.addEventListener('click', () => {
    const result = Math.floor((Math.random() * 2) + 1);
    normalWeightOfResult();
    document.querySelector('.nr1').textContent = `${result}`;
    document.querySelector('.nr1').style.fontWeight = `bold`;
    document.querySelector('.nr1').style.color = `yellow`;
    doOperation(result);
})


k3.addEventListener('click', () => {
    const result = Math.floor((Math.random() * 3) + 1);
    normalWeightOfResult();
    document.querySelector('.nr2').textContent = `${result}`;
    document.querySelector('.nr2').style.fontWeight = `bold`;
    document.querySelector('.nr2').style.color = `yellow`;
    doOperation(result);
})


k4.addEventListener('click', () => {
    const result = Math.floor((Math.random() * 4) + 1);
    normalWeightOfResult();
    document.querySelector('.nr3').textContent = `${result}`;
    document.querySelector('.nr3').style.fontWeight = `bold`;
    document.querySelector('.nr3').style.color = `yellow`;
    doOperation(result);
})


k6.addEventListener('click', () => {
    const result = Math.floor((Math.random() * 6) + 1);
    normalWeightOfResult();
    document.querySelector('.nr4').textContent = `${result}`;
    document.querySelector('.nr4').style.fontWeight = `bold`;
    document.querySelector('.nr4').style.color = `yellow`;
    doOperation(result);
})


k8.addEventListener('click', () => {
    const result = Math.floor((Math.random() * 8) + 1);
    normalWeightOfResult();
    document.querySelector('.nr5').textContent = `${result}`;
    document.querySelector('.nr5').style.fontWeight = `bold`;
    document.querySelector('.nr5').style.color = `yellow`;
    doOperation(result);
})


k10.addEventListener('click', () => {
    const result = Math.floor((Math.random() * 10) + 1);
    normalWeightOfResult();
    document.querySelector('.nr6').textContent = `${result}`;
    document.querySelector('.nr6').style.fontWeight = `bold`;
    document.querySelector('.nr6').style.color = `yellow`;
    doOperation(result);
})


k12.addEventListener('click', () => {
    const result = Math.floor((Math.random() * 12) + 1);
    normalWeightOfResult();
    document.querySelector('.nr7').textContent = `${result}`;
    document.querySelector('.nr7').style.fontWeight = `bold`;
    document.querySelector('.nr7').style.color = `yellow`;
    doOperation(result);
})


k20.addEventListener('click', () => {
    const result = Math.floor((Math.random() * 20) + 1);
    normalWeightOfResult();
    document.querySelector('.nr8').textContent = `${result}`;
    document.querySelector('.nr8').style.fontWeight = `bold`;
    document.querySelector('.nr8').style.color = `yellow`;
    doOperation(result);
})


k100.addEventListener('click', () => {
    const result = Math.floor((Math.random() * 100) + 1);
    normalWeightOfResult();
    document.querySelector('.nr9').textContent = `${result}`;
    document.querySelector('.nr9').style.fontWeight = `bold`;
    document.querySelector('.nr9').style.color = `yellow`;
    doOperation(result);
})