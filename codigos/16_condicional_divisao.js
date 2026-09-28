
const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question('Informe o 1° número: ', (n1) =>{
    rl.question('Informe o 2° número: ', (n2) => {

        if (n2 != 0) {
            divisao = Number(n1)/Number(n2)
            console.log(`O resultado da divisão é: ${divisao}`)
        } else {
            console.log('Não é possível dividir por zero')
        }
        rl.close()
    })
})