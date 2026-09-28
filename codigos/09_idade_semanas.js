const readline = require('readline');
const  rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question("Digite o seu nome: ", (nome) => {
rl.question("Digite o seu ano de nascimento: ", (nasc) => {
rl.question("Digite o ano atual: ", (atu) => {

    const idade = Number(atu)-Number(nasc)
    const sem = Number(idade)*48

    console.log('RESULTADOS')
    console.log(`Nome: ${nome}`)
    console.log(`A sua idade é : ${idade} anos e ${sem} semanas`)

    rl.close()
})    
})
})