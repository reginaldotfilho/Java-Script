const readline = require('readline');
const  rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question('Digite o primeiro valor: ', (valor1) =>{
rl.question('Digite o primeiro valor: ', (valor2) =>{
    let soma = Number(valor1)+Number(valor2)
    let sub = Number(valor1)-Number(valor2)
    let mult = Number(valor1)*Number(valor2)
    let div = Number(valor1)/Number(valor2)

    console.log('RESULTADOS')
    console.log(`A soma dos valores é: ${soma}`)
    console.log(`A diferença dos valores é: ${sub}`)
    console.log(`A multiplicação dos valores é: ${mult}`)
    console.log(`A divisão dos valores é: ${div}`)

    rl.close()
})
})