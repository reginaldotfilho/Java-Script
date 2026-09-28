// Crie um programa em Javascript (node.js) que permita ao usuário informar seu nome e três valores numéricos.


const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl. question('Digite o seu nome: ',(nome) => {
    rl.question('Digite o primeiro valor: ', (valor1) => {
        rl.question('Digite o segundo valor: ', (valor2) => {
            rl.question("Digite o terceiro valor: ", (valor3) =>{

                const media = (Number(valor1) + Number(valor2) + Number(valor3)) / 3

            console.log(`Nome: ${nome}`)
            console.log(`A media é: ${media}`)

            rl.close()

            })
    
        })
    })
})