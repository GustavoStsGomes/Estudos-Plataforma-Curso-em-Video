var valores = [8, 1, 7, 4, 2, 9]

/*//exibe todos os valores 
console.log(valores)

console.log(`Nosso valor é o ${valores}`)

//corre todo o vetor 
for(var pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

//versão simplificada javascript "para cada posição em/dentro do array"
for(var pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

var somaNum = 0

for(var pos = 0; pos < valores.length; pos++){
    somaNum += valores[pos]
}

var media = somaNum / valores.length

console.log(`a soma dos valores é ${somaNum}`)
console.log(`a média dos valores é ${media}`)



