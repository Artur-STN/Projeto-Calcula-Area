function calcular() {

    let lado_a = document.getElementById('i_lado_a').value
    let lado_b = document.getElementById('i_lado_b').value

    let res = document.getElementById('p_res')

    let medida = document.getElementById('medidas').value

    let area = lado_a * lado_b

    if (lado_a == '' && lado_b == '') {

        alert('Nenhum lado foi informado!')

    } else if (lado_a == '') {

        alert('Lado A não foi informado!')

    } else if (lado_b == '') {

        alert('Lado B não foi informado!')

    } else {

        res.innerHTML = `A Área do quadrado é:
                        <br> ${area} ${medida}²`

    }

}

function limpar() {

    let lado_a = document.getElementById('i_lado_a')
    let lado_b = document.getElementById('i_lado_b')
    
    let res = document.getElementById('p_res')

    lado_a.value = ''
    lado_b.value = ''

    res.innerHTML = ''

}
