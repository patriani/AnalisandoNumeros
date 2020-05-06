
var num = window.document.getElementById('insert') // Captura o que foi inserido pelo usuário -- ação do botão enter
var lista =  document.getElementById('lista') // Variável para inserir no campo "select"
var fin = document.querySelector('div#finalizado') // Captura ação do botão finalizar
var valores = []

function testar_intervalo(n){
    if((Number(n) >= 1) && (Number(n) <= 100) ){
        return true
    }else{
        return false
    }
}

function testar_ex( n , valores ){ // verifica se o valor já se encontra no array 
    if((testar_intervalo(n))){
        if(valores.indexOf(Number(n)) == -1){ // verifica se o valor existe (retorna -1 caso não)
            return true
        }else{
            return false
        }
    }else{ // valor não corresponde ao intervalo aceitável
        return false
    }
}

function enter(){
    var conteudo = document.createElement('option') //cria a tag option
    if(testar_ex( num.value , valores )){
        valores.push(Number(num.value)) /* .value captura o valor do objeto*/ 
        conteudo.text = `Valor ${num.value} adicionado` //aspecto visual da lista (select)
        lista.appendChild(conteudo) //adicionar no select
        fin.innerHTML = '' // toda vez que adicionar um número o conteúdo texto impresso pelo botão "finalizar" será excluído
    }else{
        var alfa = Number(num.value)    
        if(valores.indexOf(Number(num.value)) != -1)
            window.alert(`Valor ${alfa} Já Foi Adicionado`)
        else
            window.alert(`Valor ${alfa} Fora Do Intervalo Especificado`)
    }
    num.value = '' // limpa o campo de input
    num.focus() // volta o cursor para o input
}

function isNull(arr){ // passa como parametro o array: "valores"
    if(arr.length == 0)
        return true
    else
        return false
}

function finalizar(){ 
    if(!isNull(valores)){
        var cont = valores.length // quantidade de valores inseridos pelo usuário
        var soma = 0 // efetua soma de todos os valores
        var maior, menor
        maior = menor = 0
        for(var prop in valores){
            if(valores.indexOf(prop) == 0) // inicializa a var menor com o primeiro índice do vetor -- menor != 0 (não se restringir a números negativos)
                menor = prop
            if(prop > maior)
                maior = prop
            if(prop < menor)
                menor = prop
            soma += prop
        }
        var media = soma/cont
        fin.innerHTML = ''
        fin.innerHTML += `<p> Foram inseridos ${cont} elementos </p>`  
        fin.innerHTML += `<p> A média é: ${media}  </p>`   
        fin.innerHTML += `<p> O maior valor é: ${maior}  </p>`
        fin.innerHTML += `<p> O menor valor é: ${menor}  </p>`    
    }else{
        window.alert(`Insira algum valor antes de Finalizar`)
    }
}