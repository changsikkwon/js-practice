const inputId = document.querySelector('.input-id')
const inputPassword = document.querySelector('.input-password')
const loginBtn = document.querySelector('.login-btn')
const SHOWING_CLASS = "showing"
const firstSlide = document.querySelector(".img:first-child")

function slide(){

  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`)

  if (currentSlide) {
    currentSlide.classList.remove(SHOWING_CLASS)
    const nextSlide = currentSlide.nextElementSibling

    if (nextSlide) {
      nextSlide.classList.add(SHOWING_CLASS)
    } else {
      firstSlide.classList.add(SHOWING_CLASS)
    }

  } else {
    firstSlide.classList.add(SHOWING_CLASS)
  }
}

slide();
setInterval(slide, 5000);


const updateValue = (e) => {
    if (inputId.value){
        if (inputPassword.value){
            if (inputPassword.value.length <= 8 && !isNaN(inputPassword.value)){
                alert('로그인 성공!')
                location.replace('main.html')
            }
        }
    }
}

loginBtn.addEventListener('click', updateValue);