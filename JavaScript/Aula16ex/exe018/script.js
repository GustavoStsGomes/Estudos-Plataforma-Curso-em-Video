var numero = document.getElementById('txtn')
var selNum = document.getElementById('selNumeros')
var res = document.getElementById('res')
var listNumeros = []

function adicionar(){
     // testando array vazio 
    if(numero.value.length == 0){
        window.alert("[ERRO]Sem dados.")

    }else {
        var n = Number(numero.value)
        var rep = listNumeros.indexOf(n)
        
        // testando numeros repetidos
        if(rep != -1){
            window.alert("[ERRO]Valor já encontrado na lista.")
        
        //testando faixa de dados proposta
        }else if (n > 100 || n < 1){
            window.alert("[ERRO]Valor inválido no alcance.")

        //adicionando valor após validações
        }else { 
            
            //zerando selection e respostas 
            selNum.innerHTML = ''
            res.innerHTML = ''

            //adiciona novo valor
            listNumeros.push(n)

            //exibe lista toda
            for(var pos=0; pos < listNumeros.length; pos++){
                var item = document.createElement('option')
                item.text = `Valor ${listNumeros[pos]} adicionado`
                item.value = `selNum${pos}`
                selNum.appendChild(item)

            }
        }
    }

    //zerando formulário e voltando o cursor 
    numero.value = ''
    numero.focus()

}

function finalizar(){
    // testando array vazio 
    if(listNumeros.length == 0){
        window.alert("[ERRO] Adicione valores para finalizar.")

    }else {
        //se só possuir um elemento ele é o maior e o menor
        var maior = listNumeros[0]
        var menor = listNumeros[0]
        var soma = 0
        var media = 0

        for(var pos = 0; pos < listNumeros.length; pos++){
            //soma
            soma += listNumeros[pos]

            //comparando maior e menor com a lista, começando do primeiro elemento
            if(listNumeros[pos] > maior){
                maior = listNumeros[pos]

            }
            if(listNumeros[pos] < menor){
                menor = listNumeros[pos]

            }
        }
        // pegando média pela solução da soma
        media = soma / listNumeros.length

        res.innerHTML = ''
        res.innerHTML = `<p>Ao todo, temos ${listNumeros.length} números cadastrados;</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior};</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor};</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma};</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`

    }

    //zerando formulário e voltando o cursor 
    numero.value = ''
    numero.focus()

}