const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout  
})

console.log('TABUADA')

rl.question('Digite um número: ',(num) => {
    
let cont = 0
num = Number(num)

while(cont <= 10) {
    resultado = num * cont

    console.log(`${num} x ${cont} = ${resultado}`)

    cont = cont + 1
}
rl.close()
})