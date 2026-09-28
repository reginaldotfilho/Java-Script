//Inclua NOME e SALÁRIO de um funcionário.
//Verifique se o salário é menor ou igual a R$ 1.000,00
//Caso seja, dê um aumento de R$ 200,00
//senão apenas R$ 50,00. Impriam o NOME e o SALÁRIO CORRIGIDO.


const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question('Digite o seu nome: ',(nome) => {
    rl.question('Digite o seu salário: ',(salario) => {

        if (salario <= 1000) {
            let salario_corrigido = Number(salario) + 200
            console.log(`Nome: ${nome} teve o salário corrigido para R$ ${salario_corrigido}`)
        } else {
            let salario_corrigido = Number(salario) + 50
            console.log(`Nome: ${nome} teve o salário corrigido para R$ ${salario_corrigido}`)
        }
        rl.close()
    })
})