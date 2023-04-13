let botaoadicionar = document.querySelector('#botaoadicionar')
botaoadicionar.addEventListener('click', function(event){
    event.preventDefault ()

    let form = document.querySelector('.formAdd')
    let pessoa = receberValoresDoForm(form)
    console.log(pessoa)
})

function receberValoresDoForm(form){
    let pessoa= {
        nome: form.nome.value,
        cargo: form.cargo.value,
        imagem:form.imagem.files[0],
        time: form.time.value
    }

    return pessoa
}