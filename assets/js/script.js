
let botaoadicionar = document.querySelector('#botaoadicionar')
botaoadicionar.addEventListener('click', async function (event) {
    event.preventDefault()

    let form = document.querySelector('.formAdd')
    let pessoa = receberValoresDoForm(form)

    let row

    let imagemCodificada = await converterpara64(pessoa.imagem)
    localStorage.setItem('imagem', imagemCodificada)



    switch (pessoa.time) {
        case 'fullStack':
            row = document.querySelector('.fullStack')
            pessoa.corfundo = '#B9E2D3'
            break
        case 'frontEnd':
            row = document.querySelector('.frontEnd')
            pessoa.corfundo = '#0275d8'
            break
        case 'backEnd':
            row = document.querySelector('.backEnd')
            pessoa.corfundo = '#f0ad4e'
            break
        case 'datascience':
            row = document.querySelector('.datascience')
            pessoa.corfundo = '#d9534f'
            break
        case 'mobile':
            row = document.querySelector('.mobile')
            pessoa.corfundo = '#333'
            break
        case 'uxEDesign':
            row = document.querySelector('.uxEDesign')
            pessoa.corfundo = '#5bc0de'
            break


    }

    row.appendChild(await adicionarCard(pessoa))

})

function receberValoresDoForm(form) {
    let pessoa = {
        nome: form.nome.value,
        cargo: form.cargo.value,
        imagem: form.imagem.files[0],
        time: form.time.value
    }
    return pessoa
}

function adicionarDescricao(pessoa) {

    let nomePessoa = document.createElement('h4')
    nomePessoa.textContent = pessoa.nome
    nomePessoa.classList.add('text-center')
    nomePessoa.style.color = pessoa.corfundo


    let cargoPessoa = document.createElement('p')
    cargoPessoa.textContent = pessoa.cargo
    cargoPessoa.classList.add('text-center')
    cargoPessoa.style.color = pessoa.corfundo


    let figcaption = document.createElement('figcaption')
    figcaption.appendChild(nomePessoa)
    figcaption.appendChild(cargoPessoa)

    return figcaption
}

async function montarCard(pessoa) {
    let foto = document.createElement('img')

    let imagemCodificada = localStorage.getItem('imagem')
    foto.setAttribute('src', 'data:image/png;base64,' + imagemCodificada)
    foto.classList.add('img-fluid')
    foto.classList.add('foto')


    let figure = document.createElement('figure')
    figure.classList.add('card')
    figure.appendChild(foto)
    figure.appendChild(adicionarDescricao(pessoa))
    figure.style.backgroundImage = 'linear-gradient(to top, white 60%, ' + pessoa.corfundo + ')'
    

    return figure
}

async function adicionarCard(pessoa) {
    let card = await montarCard(pessoa)

    let coluna = document.createElement('div')
    coluna.classList.add('col-md-3')
    coluna.appendChild(card)

    return coluna
}

async function converterpara64(imagem) {
    return new Promise(resolve => {
        let reader = new FileReader()
        reader.readAsDataURL(imagem)
        reader.onload = function () {
            let imagemCodificada = reader.result.split(',')[1]
            resolve(imagemCodificada)
        }
    })

}




