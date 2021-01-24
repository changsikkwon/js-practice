const inputId = document.querySelector('.input-id')
const inputPassword = document.querySelector('.input-password')
const loginBtn = document.querySelector('.login-btn')

const updateValue = (e) => {
    if (inputId.value){
        if (inputPassword.value){
            alert('로그인 성공!')
        }
    }
}

loginBtn.addEventListener('click', updateValue);