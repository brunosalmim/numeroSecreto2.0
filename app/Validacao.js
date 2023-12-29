function verificarChute(chute){
    const numero = +chute

    if (chuteInvalido()(numero)){
        elementoChute.innerHTML +='<div> valor inválido</div>'
        return
    }

    if (numeroForaEscopo(numero)) {
        elementoChute.innerHTML += `<div>valor inválido, diga um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
        <h3> Você Acertou! </h3>
        <h3> O número secreto é ${numeroSecreto} </h2>

        <button id='jogar-novamente' class = 'btn-jogar'> Jogar novamente</button>
        `
    } else if(numero < numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-trend-up"></i> </div>`
    } else if(numero > numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-trend-down"></i> </div>`
    }
}

function chuteInvalido() {
    return Number.isNaN
}

function numeroForaEscopo(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e =>{
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})