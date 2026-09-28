const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout  
})

console.log('CONTAR 0 ATÉ 10')

let i = 0

do{
    console.log(i)
    i = i + 1
} while (i <= 10)

console.log('Fim da contagem...')

rl.close()