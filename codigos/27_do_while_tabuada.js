const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout  
})

console.log('TABUADA')

let i=0
let tab

rl.question('Digite o numero para sua tabuada: ', (num) => {

    do{

        tab = i * Number(num)

        console.log(`${i} x ${num} = ${tab}`)

        i = i + 1

    }while(i <= 10)

    console.log('Fim da tabuada...')
    
rl.close()
})
