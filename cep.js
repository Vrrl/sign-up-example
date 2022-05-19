function validateCep(cep){
    return /^[0-9]{5}-[0-9]{3}$/.test(cep)
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

                if (res.erro == 'true'){
                    document.getElementById('cep-error').innerHTML = 'CEP nao encontrado'

                    document.getElementById('rua').value = ''
                    document.getElementById('bairro').value = ''
                    document.getElementById('cidade').value = ''
                    document.getElementById('uf').value = ''
                    document.getElementById('ibge').value = ''
                    document.getElementById('ddd').value = ''
                    return
                } 
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

            document.getElementById('cep-error').innerHTML = 'API Offline'
            
        })
        .finally(() => {
            setLoading(false)
        })

    }
}



document.getElementById('cepInput').addEventListener('keyup', function(){
    getCepData()
});



