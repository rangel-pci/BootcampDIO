// Generic Types
// Utilizar a letra "T" quando não souber o que a função irá retornar
// Tentar ao máximo não utilizar "any"

function addToList<T>(array: any[], value: T){
    return array.map(item => item + value);
}

console.log(addToList([1, 2, 3, 4], 'aa'))