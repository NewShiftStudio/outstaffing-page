const burgerBtn = document.querySelector('.btn-burger')
const burgerMenu = document.querySelector('.header-navbar-items')
const navigation = document.querySelectorAll('.header-navbar__item')

const form = document.querySelector('.request-form-scroll')
const toFormBtn = document.querySelector('.btn-offer')

document.body.style.overflowY = 'visible'

navigation.forEach((selector) => {
  selector.addEventListener('click', (e) => {
    e.preventDefault()
    let equal = document.querySelector(`.${selector.getAttribute('href')}`)
    equal.scrollIntoView({ block: 'start', behavior: 'smooth' })
    if (burgerMenu.classList.contains('active')) {
      burgerBtn.classList.toggle('active')
      burgerMenu.classList.toggle('active')
    }
  })
})

burgerBtn.addEventListener('click', (e) => {
  e.preventDefault()
  burgerBtn.classList.toggle('active')
  burgerMenu.classList.toggle('active')
})
toFormBtn.addEventListener('click', (e) => {
  form.scrollIntoView({ block: 'center', behavior: 'smooth' })
})
