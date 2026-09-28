const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question('Digite seu nome: ', (nome) => {
    rl.question('Qual seu ano de nascimento: ', (nasc) => {
        rl.question('Qual o ano atual: ' ,(atua) => {

            const idade  = Number(atua) - Number(nasc)

            if(idade >= 18){
                console.log('Você atingiu a MAIORIDADE')
            } else {
                console.log('Você é uma CRIANÇA')
            }

        })
    })
})