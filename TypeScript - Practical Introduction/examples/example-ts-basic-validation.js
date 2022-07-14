"use strict";
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const btn = document.getElementById('btn1');
const sum = (num1, num2, mustPrint, text) => {
    const res = num1 + num2;
    if (mustPrint)
        console.log(text + res);
    return res;
};
const mustPrint = true;
const text = 'Value = ';
if (btn) {
    btn.addEventListener('click', () => {
        const res = sum(Number(input1.value), Number(input2.value), mustPrint, text);
        console.log(res);
    });
}
