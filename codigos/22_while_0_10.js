const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout  
})

console.log('CONTAR 0 ATÉ 10')

let cont = 0

while(cont <= 10) {
    console.log(cont)
    cont = cont +  1
}
console.log("Fim da contagem...")

rl.close()