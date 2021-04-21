const forms = document.querySelectorAll('.request-form')

forms.forEach(form => {
  const formData = new FormData(form)

  const btn = form.querySelector('.btn-request')
  const success = form.querySelector('.response-text')
  const successImg = form.querySelector('.response-img')
  const nameInput = form.querySelector('.request-form-name')
  const phoneInput = form.querySelector('.request-form-phone')

  form.addEventListener('submit', async e => {
    e.preventDefault()
    const phone = phoneInput.value
    const name = nameInput.value
    formData.append('phone', phone)
    formData.append('name', name)

    btn.setAttribute('disabled', true)
    success.style.visibility = 'visible'

    success.innerText = 'Отправка...'
    const response = await fetch('sendmail.php', {
      method: 'POST',
      body: formData,
    })
    if (response.ok) {
      nameInput.value = ''
      phoneInput.value = ''
      success.innerText = 'Отправлено!'
      success.style.visibility = 'visible'
      successImg.style.visibility = 'visible'
      successImg.setAttribute('src', '../images/icons/response-ok.svg')
      success.style.color = 'green'
      btn.removeAttribute('disabled')
      setTimeout(() => {
        success.style.visibility = 'hidden'
        successImg.style.visibility = 'hidden'
      }, 3000)
    } else {
      btn.removeAttribute('disabled')
      success.innerText = 'Заявка не была отправлена'
      success.style.visibility = 'visible'
      successImg.style.visibility = 'visible'
      successImg.setAttribute('src', '../images/icons/response-bad.svg')
      success.style.color = 'tomato'
    }
  })
})
