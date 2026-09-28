const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout  
})
 
console.log('')
console.log('***  Calculadora  ***')
console.log('')
rl.question('Informe o primeiro número: ',(n1)=>{
rl.question('Informe o primeiro número: ',(n2)=>{
console.log('')
console.log('[1] Somar.')
console.log('[2] Subtrair.')
console.log('[3] Multiplicar.')
console.log('[4] Dividir.')
 
rl.question('Selecione uma opção: ',(opcao)=>{
    n1=Number(n1)
    n2=Number(n2)
    opcao=Number(opcao)
    let resultado=0
 
    switch(opcao){
        case 1:
            resultado=n1+n2
            console.log('O resultado é: ',resultado)
            break
            case 2:
                resultado=n1-n2
                console.log('O resultado é: ',resultado)
                break
                case 3:
                    resultado=n1*n2
                    console.log('O resultado é: ',resultado)
                    break
                    case 4:
                        if (n2!=0){
                            resultado=(n1/n2).toFixed(2)
                            console.log('O resultado é: ',resultado)
                        }else{
                            console.log('Não é possível dividir por zero!')    
                        }
                       break
                    default:
                        console.log('A opção não existe!!')
                        break
 
 
    }
   
    rl.close()
})    
})
})
 