let previousResults = []
let translate = () => {
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
  document.querySelector('#result').innerText = output
}
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('form').addEventListener('click', evt => {
    if (!evt.target.getAttribute('type') === 'radio') { return; }
    translate()
  })
  document.querySelector('form').addEventListener('submit', evt => {
    evt.preventDefault()
    translate()
    // document.querySelector('#results').innerHTML = previousResults.slice(-5).reverse().map(x => '<li>' + x + '</li>').join('')
  })
})
