var num = []
num.push(3) //acrescenta um numero no final do vetor
//num.sort() // ordena o array
num.indexOf(7) //procura elemento do vetor pelo valor, retorna -1 se não encontrado

console.log(num)
console.log(`o vetor tem ${num.length} posições`)
console.log(`o primeiro valor do vetor é ${num[0]}`)

var pos = num.indexOf(8)
console.log(`o valor 8 está na posição ${pos}`)

var pos = num.indexOf(2)
if (pos == -1){
    console.log(`o valor não foi encontrado`)
}else{
    console.log(`o valor 2 está na posição ${pos}`)
}





