type input = number | string;

/**
 * @param input1 input type
 * @param input2 input type
 * @returns input type
 */
const sumValues = (input1: input, input2: input): input => {
    if(typeof input1 === 'string' || typeof input2 === 'string'){
        return input1.toString() + input2.toString();
    }
    return input1 + input2;
}

console.log(sumValues(1, 5));
console.log(sumValues('Hey', ', Hi'));
console.log(sumValues('1', 5));

/**
 * @param text string type
 * return void, because printText does not return anything so do console.log()
 */
const printText = (text: string): void => {
    console.log(text);
}

/**
 * Callback
 */

const sumValues2 = (num1: number, num2: number, callback: (resultNumber: number) => string): string => {
    const result = num1 + num2;
    return callback(result);
}

const toSquare = (num: number) => {
    return num + ' to square = ' + num * num;
}

console.log(sumValues2(1, 1, toSquare));