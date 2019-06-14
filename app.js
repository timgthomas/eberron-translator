let previousResults = []
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('form').addEventListener('submit', evt => {
    evt.preventDefault()
    let input = document.querySelector('#input').value.trim()
    let language = document.querySelector('[name="language"]:checked').value
    let output
    try {
      output = window[language](input)
      if (previousResults.slice(-1)[0] !== output) {
        previousResults.push(output)
      }
    } catch (ex) {
      output = '(Error)'
    }
    document.querySelector('#result').value = output
    document.querySelector('#results').innerHTML = previousResults.slice(-5).reverse().map(x => '<li>' + x + '</li>').join('')
  })
})
