const readline = require('readline');
const  rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question("Digite o primeiro valor: ", (valor1) => {
   const dobro=Number(valor1)*2

    console.log(`O dobro do valor é: ${dobro}`)

    rl.close()
})