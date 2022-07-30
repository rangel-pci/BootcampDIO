let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLElement;

campoSaldo.innerHTML = '0';

function somarAoSaldo(soma: number): void {
    let saldo = Number(campoSaldo.innerHTML) + soma;
    campoSaldo.innerHTML = (saldo).toString();
}

function limparSaldo(): void {
    campoSaldo.innerHTML = '';
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});