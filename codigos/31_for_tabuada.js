const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout  
})
console.log('Tabuada')

let i 
let tab

rl.question('Digite o numero para sua tabuada: ', (num) => {
    for(i=0; i <= 10; i++) {
        
        tab = i * Number(num)

        console.log(`${i} x ${num} = ${tab}`)

    }
rl.close()
})

