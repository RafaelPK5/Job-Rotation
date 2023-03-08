let encontrado = false;
const numeroInf = 233;

function fibonacci(n) {
    let a = 0;
    let b = 1;

    for (let i = 0; i < n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return a;
}


for (let i = 0; i <= numeroInf; i++) {
    if (fibonacci(i) === numeroInf) {
        encontrado = true;
        break;
    }
}

if (encontrado) {
    console.log(numeroInf + " está na sequência de Fibonacci.");
} else {
    console.log(numeroInf + " não está na sequência de Fibonacci.");
}