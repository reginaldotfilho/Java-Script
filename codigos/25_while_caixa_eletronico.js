const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout  
})

console.log('CAIXA ELETRONICO')

let saldo = 1000


function menu() {
    console.log('1 - Consultar sado')
    console.log('2 - Depositar')
    console.log('3 - Sacar')
    console.log('0 - Sair')

    
rl.question('escolha uma das opções acima: ', (resposta) =>{
    opcao = Number(resposta)
    
    switch (opcao) {
        case 1:
            console.log(`Saldo atual: R$ ${saldo.toFixed(2)}`)

            menu()
            break
        case 2:
            rl.question('Digite o valor do deposito: ', (valor) => {
                valor = Number(valor)
                saldo = saldo + valor
                console.log('Deposito realziado com sucesso!')
                console.log(`Novo saldo: R$ ${saldo.toFixed(2)}`)

                menu()
            })
            break
        case 3:
            console.log('')
            rl.question('Digite o valor do saque ', (valor) => {
                valor = Number(valor)

                if(valor <= saldo) {
                    saldo = saldo - valor
                    console.log('Saque realizado com sucesso!')
                    console.log(`Novo saldo: R$ ${saldo.toFixed(2)}`)
                } else {
                    console.log('Voce é pobre! Saldo insuficiente')
                }
            console.log('')
            menu()
            })
            break
        case 0:
            console.log('')
            console.log('Programa encerrado.')

            rl.close()
            break
        default:
            console.log('Opção invalida!')

            menu()
            break
    }
})

}
menu()