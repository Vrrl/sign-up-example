function validateCep(){
    return true
}

function setLoading(bool){
    disabledInputs(bool)
    if (bool)
        document.getElementById('loader').innerHTML = 'Carregando'
    else
        document.getElementById('loader').innerHTML = ''

}

function disabledInputs(bool){
    document.getElementById('rua').disabled = bool
    document.getElementById('bairro').disabled = bool
    document.getElementById('cidade').disabled = bool
    document.getElementById('uf').disabled = bool
    document.getElementById('ibge').disabled = bool
    document.getElementById('ddd').disabled = bool
}

function getCepData(){
    
    let cep = document.getElementById('cepInput').value

    if (!validateCep(cep)){
        document.getElementById('cepInput').classList.add('invalid')
        document.getElementById('cepInput').classList.remove('valid')
        document.getElementById('cep-error').innerHTML = 'CEP Invalido'
        
        
    }else {
        document.getElementById('cep-error').innerHTML = ''
        document.getElementById('cepInput').classList.add('valid')
        document.getElementById('cepInput').classList.remove('invalid')

        disabledInputs(true)


        fetch(`https://viacep.com.br/ws/${cep}/json`)
        .then((res) => {
            res.json().then(res => {
                console.log(res)

                document.getElementById('rua').value = res.logradouro
                document.getElementById('bairro').value = res.bairro
                document.getElementById('cidade').value = res.localidade
                document.getElementById('uf').value = res.uf
                document.getElementById('ibge').value = res.ibge
                document.getElementById('ddd').value = res.ddd
            });

        })
        .catch(res => {
            console.log(res);
            document.getElementById('cep-error').innerHTML = 'CEP Nao encontrado!'
            
        })
        .finally(() => {
            setLoading(false)
        })

    }
}



document.getElementById('cepInput').addEventListener('keyup', function(){
    getCepData()
});



