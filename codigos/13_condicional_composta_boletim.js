const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question('Digite o primeiro valor: ', (nota1) => {
     rl.question('Digite o segundo valor: ', (nota2) => {
         rl.question("Digite o terceiro valor: ", (nota3) =>{

            const media = (Number(nota1) + Number(nota2) + Number(nota3)) / 3
            console.log(`A media é: ${media}`)

            if (media === 7) {
                console.log('Aprovado')
            } else {
                    if(media >= 5 && media < 7){
                    console.log("Recuperação")
                    } else {
                    console.log("Reprovado")
                }
            }
         rl.close()
        })
    })
})