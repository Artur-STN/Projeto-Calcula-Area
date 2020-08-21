function calcular() {

    let d_maior = document.getElementById('i_d_maior').value
    let d_menor = document.getElementById('i_d_menor').value

    let res = document.getElementById('p_res')

    let medida = document.getElementById('medidas').value

    let area = (d_maior * d_menor) / 2

    if (d_maior == '' && d_menor == '') {

        alert('Nenhum lado foi informado!')

    } else if (d_maior == '') {

        alert('Diagonal Maior não foi informado!')

    } else if (d_menor == '') {

        alert('Diagonal Menor não foi informado!')

    } else {

        res.innerHTML = `A Área do losango é:
                        <br> ${area} ${medida}²`

    }

}

function limpar() {

    let d_maior = document.getElementById('i_d_maior')
    let d_menor = document.getElementById('i_d_menor')
    
    let res = document.getElementById('p_res')

    d_maior.value = ''
    d_menor.value = ''

    res.innerHTML = ''

}
