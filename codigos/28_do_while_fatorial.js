const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout  
})

console.log('FATORIAL')

function fatorial() {

    rl.question('Digite um número: ', (num) => {

        let i = Number(num)
        let fat  = 1

        do{

               fat = fat * i
                i = i - 1
                console.log(`resultado: ${fat}`)
            }while(i > 1)
            
            rl.question('Quer continuar? [sim/nao]', (resp) => {
                resp = resp.toUpperCase()

                if(resp === 'SIM') {
                    fatorial()
                } else {
                    rl.close()
                }
            })

    }) 
}
fatorial()