document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('form').addEventListener('submit', evt => {
    evt.preventDefault()
    let input = document.querySelector('#input').value.trim()
    let language = document.querySelector('[name="language"]:checked').value
    let output
    try {
      output = window[language](input)
    } catch (ex) {
      output = '(Error)'
    }
    document.querySelector('#result').value = output
  })
})
