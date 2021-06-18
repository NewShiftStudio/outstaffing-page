const burgerBtn = document.querySelector('.btn-burger')
const burgerMenu = document.querySelector('.header-navbar-items')
const navigation = document.querySelectorAll('.header-navbar__item')

document.body.style.overflowY = 'visible'

navigation.forEach((selector) => {
  selector.addEventListener('click', (e) => {
    e.preventDefault()
    let equal = document.querySelector(`.${selector.getAttribute('href')}`)
    console.log(equal.classList.contains('request-form'))
    if (equal.classList.contains('request-form')) {
      equal.scrollIntoView({ block: 'center', behavior: 'smooth' })
    } else {
      equal.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }
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
