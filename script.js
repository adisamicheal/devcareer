const themeSwitcher = document.querySelector('.theme-switcher')
const body = document.querySelector('body')
themeSwitcher.addEventListener('click', function () {
  if (body.classList.contains('dark')) {
    body.classList.remove('dark')
    this.textContent = 'Dark'
  } else {
    body.classList.add('dark')
    this.textContent = 'Light'
  }
})