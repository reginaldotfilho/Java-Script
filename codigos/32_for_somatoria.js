const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout  
})

console.log('Somatoria')

rl.question('Entre com os 5 valores separados por espaco: ', (entrada) => {
    let numeros = entrada.split(' ')
    let soma = 0
    let num

    for(let cont = 0; cont < 5; cont++) {
        num = Number(numeros[cont])
        soma = soma + num
    }
    console.log('')
    console.log(`A somatória dos valores é: ${soma}`)

    rl.close()
})