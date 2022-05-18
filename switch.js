function switchto(local){
    if(local == 'cep'){
        document.getElementById('signup').style.display = 'none'
        document.getElementById('cep').style.display = 'flex'
    }
    else if(local == 'signup'){
        document.getElementById('cep').style.display = 'none'
        document.getElementById('signup').style.display = 'flex'
    }
}