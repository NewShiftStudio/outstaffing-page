const prices = {
  SNG: {
    1: '31100',
    0.5: '19100',
    0.25: '11200',
  },
  RF: {
    1: '32200',
    0.5: '19800',
    0.25: '11600',
  },
}

const citizenshipBtns = document.querySelectorAll('.btn-citizenship')
const loanBtns = document.querySelectorAll('.btn-loan')
const price = document.querySelector('.calculator-price')
function ifSelected(el, cb) {
  if (el.classList.contains('selected')) {
    cb()
  }
}

function initButtons() {
  loanBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      unselectType(loanBtns)
      btn.classList.toggle('selected')
      priceCalculator()
    })
  })
  citizenshipBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      unselectType(citizenshipBtns)
      btn.classList.toggle('selected')
      priceCalculator()
    })
  })
}

function unselectType(elements) {
  elements.forEach(element => {
    ifSelected(element, () => {
      element.classList.toggle('selected')
    })
  })
}

function priceCalculator() {
  let calculated = ''
  let currentCitizenship = ''
  let currentLoan = ''
  citizenshipBtns.forEach(btn => {
    ifSelected(btn, () => {
      currentCitizenship = btn.dataset.calculator
    })
  })
  loanBtns.forEach(btn => {
    ifSelected(btn, () => {
      currentLoan = btn.dataset.calculator
    })
  })
  calculated = prices[currentCitizenship][currentLoan]
  price.innerHTML = calculated
}
priceCalculator()
