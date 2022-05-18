users = []

function checkIsUniqueUsername(){
    valid = !users.some(e => e.username ===  document.getElementById('username').value)

    if (valid){
        document.getElementById('username-error').innerHTML = ''
        document.getElementById('username').classList.add('valid')
        document.getElementById('username').classList.remove('invalid')
    }else{
        document.getElementById('username-error').innerHTML = 'Username em uso!'
        document.getElementById('username').classList.add('invalid')
        document.getElementById('username').classList.remove('valid')
    }
    
    return valid
}

function checkIsValidUsername(){
    username = document.getElementById('username').value

    valid = (username.length > 3 && username.length < 25)


    if (valid){
        document.getElementById('username-error').innerHTML = ''
        document.getElementById('username').classList.add('valid')
        document.getElementById('username').classList.remove('invalid')
    }else{
        document.getElementById('username-error').innerHTML = 'Username invalido!'
        document.getElementById('username').classList.add('invalid')
        document.getElementById('username').classList.remove('valid')
    }
    
    return valid

}

function checkIsUniqueEmail(){
    valid = !users.some(e => e.email ===  document.getElementById('email').value)

    if (valid){
        document.getElementById('email-error').innerHTML = ''
        document.getElementById('email').classList.add('valid')
        document.getElementById('email').classList.remove('invalid')
    }else{
        document.getElementById('email-error').innerHTML = 'Email em uso!'
        document.getElementById('email').classList.add('invalid')
        document.getElementById('email').classList.remove('valid')
    }
    
    return valid

}

function checkIsValidEmail(){
    email = document.getElementById('email').value

    valid = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    if (valid){
        document.getElementById('email-error').innerHTML = ''
        document.getElementById('email').classList.add('valid')
        document.getElementById('email').classList.remove('invalid')
    }else{
        document.getElementById('email-error').innerHTML = 'Email Invalido!'
        document.getElementById('email').classList.add('invalid')
        document.getElementById('email').classList.remove('valid')
    }
    
    return valid

}

function checkConfirmationPassword(){
    valid = document.getElementById('password').value == document.getElementById('cpassword').value

    if (valid){
        document.getElementById('cpassword-error').innerHTML = ''
        document.getElementById('cpassword').classList.add('valid')
        document.getElementById('cpassword').classList.remove('invalid')
    }else{
        document.getElementById('cpassword-error').innerHTML = 'Senhas nao sao iguais!'
        document.getElementById('cpassword').classList.add('invalid')
        document.getElementById('cpassword').classList.remove('valid')
    }
    
    return valid

}

function checkIsValidPassword(){
    password = document.getElementById('password').value

    valid = (password.length > 8)

    if (valid){
        document.getElementById('password-error').innerHTML = ''
        document.getElementById('password').classList.add('valid')
        document.getElementById('password').classList.remove('invalid')
    }else{
        document.getElementById('password-error').innerHTML = 'Senha muito curta!'
        document.getElementById('password').classList.add('invalid')
        document.getElementById('password').classList.remove('valid')
    }
    
    return valid

}



function checkForm(){
    return (
        checkIsUniqueUsername() &&
        checkIsValidUsername() &&
        checkIsUniqueEmail() &&
        checkIsValidEmail() &&
        checkConfirmationPassword() &&
        checkIsValidPassword()
    )
}

function getUserFromForm(){
    const user = new Object()

    user.username = document.getElementById('username').value
    user.email = document.getElementById('email').value
    user.password = document.getElementById('password').value

    return user
}

disabled = false

function submitForm(){
    if (disabled || !checkForm())
    return false
    console.log('ola')

    disabled = true

    setTimeout(() => {
        disabled = false
    },1000)

    users.push(getUserFromForm())
    
    
    document.getElementById("form").reset();


}


document.getElementById("formbutton").addEventListener('click', function(e) {
    e.preventDefault();
    submitForm()    
});