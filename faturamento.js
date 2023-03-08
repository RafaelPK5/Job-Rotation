const json = require('./dados.json')
let maior = 0
let menor = 999999999
let dias = 0
let media = 0
let diaMedia = 0

const values = json.filter(valor => {
    if (valor.valor < menor) menor = valor.valor;
    if (valor.valor > maior) maior = valor.valor;
    media += valor.valor;
    if(valor.valor != 0.0){
        dias += 1;
    }
    media  = media.toFixed(4)/dias;
    if(valor.valor > media) diaMedia += 1;
})
console.log('Maior valor foi ' + maior)
console.log('Dias em que a media de faturamento foi maior foi de ' + diaMedia)
console.log('Menor valor foi ' + menor)