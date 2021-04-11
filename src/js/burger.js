const burgerBtn = document.querySelector('.btn-burger')
const burgerMenu = document.querySelector('.header-navbar-items')
const navigation = document.querySelectorAll('.header-navbar__item')

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
