document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('form').addEventListener('submit', evt => {
    evt.preventDefault()
    let input = document.querySelector('#input').value
    let language = document.querySelector('[name="language"]:checked').value
    let output = window[language](input)
    document.querySelector('#output').value = output
  })
})
