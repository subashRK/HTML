
const labelInput = document.querySelector('.label-input')
const label = document.querySelector('.label-input-form label')
const body = document.querySelector('body')
const mailButton = document.querySelector('.mail-button')

const loadOnPageReady = () => {
  labelInput.addEventListener('click', handleInputStylesChange)
  body.addEventListener('click', handleInputStylesRemove)
  mailButton.addEventListener('click', sendMail)
}

const sendMail = () => {
  const value = labelInput.value

  if (value.trim() !== '' && value.includes('@')) {
    mailButton.setAttribute('href', `mailto:${value}`)
  } else {
    alert('Invalid Email!')
  }
}

const handleInputStylesChange = () => {
  label.style.marginBottom = '35px' 
  label.style.fontSize = '13px'
  label.style.color = 'rgb(50, 134, 255)'
  
  labelInput.style.border = 'none'
  labelInput.style.borderBottom = '2px solid rgb(50, 154, 255)'
}

const handleInputStylesRemove = e => {
  if (labelInput.value === '' && e.target.id !== 'label-input') {
    label.style.marginBottom = '5px' 
    label.style.fontSize = '16px'
    label.style.color = 'black'

    labelInput.style.border = 'none'
    labelInput.style.borderBottom = '2px solid rgb(53, 53, 53)'
  }
}

window.addEventListener('load', loadOnPageReady)
