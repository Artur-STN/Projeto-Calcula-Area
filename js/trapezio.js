function calcular() {

    let b_maior = document.getElementById('i_b_maior').value
    let b_menor = document.getElementById('i_b_menor').value
    let altura = document.getElementById('i_altura').value


    let medida = document.getElementById('medidas').value

    let res = document.getElementById('p_res')

    let area = ((Number(b_maior) + Number(b_menor)) * Number(altura)) / 2

    if (b_maior == '' && b_menor == '' && altura == '') {

        alert('Nenhum dado foi informado!')

    } else if (b_maior == '') {

        alert('Base Maior não foi informado!')

    } else if (b_menor == '') {

        alert('Base Menor não foi informado!')

    } else if (altura == '') {

        alert('Altura não foi informada!')

    } else {

        res.innerHTML = `A Área do trapézio é:
                    <br> ${area} ${medida}²`
    }

}

function limpar() {

    let b_maior = document.getElementById('i_b_maior')
    let b_menor = document.getElementById('i_b_menor')
    let altura = document.getElementById('i_altura')

    let res = document.getElementById('p_res')

    b_maior.value = ''
    b_menor.value = ''
    altura.value = ''

    res.innerHTML = ''

}