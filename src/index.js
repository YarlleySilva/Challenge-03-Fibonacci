'use strict'

const fibonacci = () => {
    let valorInicial = [0, 1];

    for (let i = 2; i <= 350; i++) {
        let valorFinal = valorInicial[i - 2] + valorInicial[i - 1]
        valorInicial.push(valorFinal);
    }
    return valorInicial;
}

const isFibonnaci = (num) => fibonacci().includes(num);

module.exports = {
    fibonacci,
    isFibonnaci
}