//faca um programa que receba 3 notas de um estudante,
//calcule e imprima a média aritmética das notas
// e a mensagem de aprovado para média superior
//para média inferior a 7,0.

const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question('Digite o primeiro valor: ', (nota1) => {
     rl.question('Digite o segundo valor: ', (nota2) => {
         rl.question("Digite o terceiro valor: ", (nota3) =>{

            const media = (Number(nota1) + Number(nota2) + Number(nota3)) / 3

            if (media === 7,0) {
                console.log(`A media é: ${media}`)
                console.log('Aprovado')
            } else {
                console.log(`A media é: ${media}`)
                console.log('Reprovado')
            }

         rl.close()

        })
    })
})