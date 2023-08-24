const container = document.querySelector('.container')
const button = document.querySelector('button')

function createGrid(width) {
  for (let i = 0; i < width ** 2; i++) {
    const div = document.createElement('div')
    div.setAttribute('id', i)
    div.classList.add('square')
    div.style.width = `${1 / (width / 100)}%`
    div.style.height = `${1 / (width / 100)}%`

    div.addEventListener('mouseover', () => {
      div.classList.add('on')
    })

    container.appendChild(div)
  }
}

function changeSize() {
  const size = prompt('Choose a new size per side for de grid:')
  container.innerHTML = ''

  if (size < 100 && size > 0) {
    createGrid(size)
  } else {
    alert('Escoge un numero entre 0 y 100')
  }
}

button.addEventListener('click', changeSize)

createGrid(16)
