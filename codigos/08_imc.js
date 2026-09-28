const readline = require('readline');
const  rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question('Digite seu peso: ', (peso) =>{
rl.question('Digite sua altura : ', (altura) =>{
    let imc=Number(Number(peso)/(Number(altura)**2)).toFixed(2)

    console.log(`Seu IMC é : ${imc}`)

    rl.close()
})
})