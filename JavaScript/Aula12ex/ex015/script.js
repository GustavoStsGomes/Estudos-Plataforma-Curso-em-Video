function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (formAno.value.length == 0 || formAno.value > ano){
       window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var formSex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (formSex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'crianca-m.jpeg')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-m.jpeg')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adulto-m.jpeg')
            }else{
                //idoso
                img.setAttribute('src', 'idoso-m.jpeg')
            }

        }else if (formSex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'crianca-f.jpeg')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-f.jpeg')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adulto-f.jpeg')
            }else{
                //idoso
                img.setAttribute('src', 'idoso-f.jpeg')
            }

        }
        res.style.textAlign= 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}