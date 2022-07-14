const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const btn = document.getElementById('btn1');

const sum = (num1, num2) => {
    return num1 + num2;
}

btn.addEventListener('click', () => console.log(sum(input1.value, input2.value)));
