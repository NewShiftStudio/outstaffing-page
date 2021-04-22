const price = document.querySelector('.calculator-price')
const salaryInput = document.querySelector('.salary')
defaultSalary = 10000
salaryInput.value = defaultSalary.toLocaleString()
const citizenshipBtns = document.querySelectorAll('.btn-citizenship')
const salaryStatus = document.querySelector('.salary-status')
const salaryMask = `[0-9]{10000,99999}`
const errors = {
  lower: 'Ошибка: Оклад меньше 1000р',
  higher: 'Ошибка: Оклад больше 99999р',
  empty: 'Ошибка: Введите оклад',
}
function calcSNG(salary) {
  return parseInt(
    salary +
      salary * 0.005 +
      2000 +
      salary * 0.22 +
      salary * 0.018 +
      salary * 0.017
  )
}
function calcRF(salary) {
  return parseInt(
    salary +
      salary * 0.005 +
      2000 +
      salary * 0.22 +
      salary * 0.018 +
      (salary / 100) * 5.1 +
      salary * 0.017
  )
}
function addListener(elements, listener, cb) {
  if (elements instanceof NodeList) {
    elements.forEach((element) => {
      element.addEventListener(listener, cb)
    })
  } else if (elements instanceof HTMLElement) {
    elements.addEventListener(listener, cb)
  } else {
    throw new Error(`${elements} is not a NodeList or HTMLElement`)
  }
}
function ifSelected(el, cb) {
  if (el.classList.contains('selected')) {
    cb()
  }
}

function initButtons() {
  citizenshipBtns.forEach((btn) => {
    addListener(btn, 'click', () => {
      unselectType(citizenshipBtns)
      btn.classList.toggle('selected')
      if (salaryStatus.classList.contains('active')) {
        return
      }
      calculate()
    })
  })
}
function initSalaryInput() {
  addListener(salaryInput, 'input', (e) => {
    if (!validateCurrentSalary(e)) {
      return
    }
    setInputWithSpaces()
    calculate()
  })
}
function validateCurrentSalary(e) {
  const numberV = salaryInput.value.replace(/\D/g, '')
  const currentNum = parseInt(numberV)
  if (e.data && /\D/g.test(e.data)) {
    salaryInput.value = numberV
    if (Number.isNaN(currentNum)) {
      return false
    }
    setInputWithSpaces()
    return false
  }
  if (Number.isNaN(currentNum)) {
    salaryStatus.innerHTML = errors.empty
    price.innerHTML = ''
    return false
  }
  if (currentNum > 999999 || currentNum < 1000) {
    salaryStatus.classList.add('active')
    price.innerHTML = ''
    if (currentNum < 1000) {
      salaryStatus.innerHTML = errors.lower
      setInputWithSpaces()
      return false
    }
    if (currentNum > 999999) {
      salaryStatus.innerHTML = errors.higher
      setInputWithSpaces()
      return false
    }
  }
  salaryStatus.classList.remove('active')
  return true
}
function setInputWithSpaces() {
  const spacedNum = getInputNum()
  salaryInput.value = spacedNum.toLocaleString()
}
function getInputNum() {
  const stringSalary = salaryInput.value
  const intSalary = parseInt(stringSalary.replace(/\s+/g, ''), 10)
  return intSalary
}
function unselectType(elements) {
  elements.forEach((element) => {
    ifSelected(element, () => {
      element.classList.toggle('selected')
    })
  })
}
function getPressedButtonType() {
  let selectedBtn = null
  citizenshipBtns.forEach((btn) => {
    if (btn.classList.contains('selected')) {
      selectedBtn = btn.dataset.calculator
    }
  })
  return selectedBtn
}
function calculate() {
  if (getPressedButtonType() === 'SNG') {
    price.innerHTML = calcSNG(getInputNum())
  } else {
    price.innerHTML = calcRF(getInputNum())
  }
}

initButtons()
initSalaryInput()
calculate()
