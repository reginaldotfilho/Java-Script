const readline = require('readline');
const  rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question('Digite o valor da cotação do dólar: ', (cot_dol) =>{
rl.question('Digite o valor em reais : ', (reais) =>{
    let tot_dol=Number(Number(reais)/Number(cot_dol)).toFixed(2)

    console.log(`Com esta quantia de reais você pode adquirir : US$${tot_dol}`)

    rl.close()
})
})