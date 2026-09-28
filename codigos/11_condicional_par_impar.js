/*Verificar se o valor é PAR */

const readline= require('readline')
const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
})

rl.question('Informe um valor: ', (valor) => {
    valor = Number(valor)

    if (valor % 2 === 0) {
    /* = atribuição; == Igualdade; === igualdade estrita,
    verifica o valor e tipo
    == 10 == "10" - true
    === 10 === "10" = false
    */
        console.log('O valor é PAR')
    }else{
        console.log('O valor é IMPAR')
    }
    rl.close()
})
