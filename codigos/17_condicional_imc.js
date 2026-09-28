const readline = require('readline');
const  rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question('Digite seu peso: ', (peso) =>{
    rl.question('Digite sua altura : ', (altura) =>{
        let imc=Number(Number(peso)/(Number(altura)**2))

        if(altura <= 0 ) {
            console.log('Altura Invalida!')
        } else {
            imc = Number(peso)/Number(altura)**2
        }
        console.log(`Seu IMC é : ${imc.toFixed(2)}`)

        if(imc < 17) {
            console.log('Muito abaixo do peso!')
        } else {
             if(imc >= 17 && imc < 18.5) {
                console.log('Abaixo do peso!')
            } else {
                if(imc >= 18.5 && imc < 25) {
                    console.log('Peso ideal!')
                } else {
                    if(imc >= 25 && imc < 30) {
                        console.log('Sobrepeso!')
                    } else {
                        if(imc >= 30 && imc < 35) {
                            console.log('Obesidade!')
                        } else {
                            if(imc >= 35 && imc < 40) {
                                console.log('Obesidade Severa')
                            } else {
                                console.log('Obesidade Mórbida')
                            }
                        }
                    }
                }
            }
        }

        rl.close()
    })
})