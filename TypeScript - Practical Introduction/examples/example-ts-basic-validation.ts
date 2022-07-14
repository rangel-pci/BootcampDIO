const input1 = document.getElementById('input1') as HTMLInputElement;
const input2 = document.getElementById('input2') as HTMLInputElement;
const btn = document.getElementById('btn1');

const sum = (num1: number, num2: number, mustPrint: boolean, text: string) => {
    const res = num1 + num2;

    if(mustPrint) console.log(text + res);
    return res;
}

const mustPrint = true;
const text = 'Value = ';

if(btn){
    btn.addEventListener('click', () => {
            const res = sum(Number(input1.value), Number(input2.value), mustPrint, text);
            console.log(res);
        }
    );
}
