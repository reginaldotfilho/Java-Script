const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout  
})

console.log('CONTAGEM 0 a 10')

let i

for(i=0; i <=10; i++) {
    console.log(i)
}
rl.close()
