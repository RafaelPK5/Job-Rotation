const json = {
    "SP": 67.83643,
    "RJ": 36.67866,
    "MG": 29.22988,
    "ES": 27.16548,
    "Outros": 19.84953
}
let total = json.ES + json.MG + json.Outros + json.RJ + json.SP

function percentual(obj) {
    let percentual = (obj / total) * 100;
    console.log("O Percentual é " + percentual.toFixed(2) + "%")
}

percentual(json.SP)
percentual(json.RJ)
percentual(json.MG)
percentual(json.ES)
percentual(json.Outros)