function calcular() {

    let altura = document.getElementById('i_altura').value
    let base = document.getElementById('i_base').value

    let res = document.getElementById('p_res')

    let medida = document.getElementById('medidas').value

    let area = (altura * base) / 2

    if (altura == '' && base == '') {

        alert('Nenhum lado foi informado!')

    } else if (altura == '') {

        alert('Lado A não foi informado!')

    } else if (base == '') {

        alert('Lado B não foi informado!')

    } else {

        res.innerHTML = `A Área do triângulo é:
                        <br> ${area} ${medida}²`

    }

}

function limpar() {

    let altura = document.getElementById('i_altura')
    let base = document.getElementById('i_base')
    
    let res = document.getElementById('p_res')

    altura.value = ''
    base.value = ''

    res.innerHTML = ''

}
