const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout  
})
console.log('Tabuada')

let i
let n
for(i=0;i<=10;i++) {
    console.log('')
    console.log(` Tabauda de: ${i}`)
    for(n=0;n<=10;n++){
        console.log(`${i} x ${n} = ${(i*n)}`)
    }
    console.log('')
rl.close()
}
console.log('')
console.log('Fim da tabuada')