const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout  
})

console.log('CONTAR ATÉ QUANTO')

rl.question('QUER CONTAR ATÉ QUANTO: ', (valor) => {

let cont = 0
valor = Number(valor)

while(cont <= valor) {
    console.log(cont)
    cont = cont +  1
}
console.log("Fim da contagem...")

rl.close()

})

