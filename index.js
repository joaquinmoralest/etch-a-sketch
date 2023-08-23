const container = document.querySelector('.container')
const button = document.querySelector('button')

function createGrid(width, height) {
  for (let i = 0; i < width * height; i++) {
    const div = document.createElement('div')
    div.setAttribute('id', i)
    div.classList.add('square')

    div.addEventListener('mouseover', () => {
      div.classList.toggle('on')
    })

    container.appendChild(div)
  }
}

function changeSize() {
  const size = prompt('Choose a new size per side for de grid:')
  container.innerHTML = ''
  createGrid(size, size)
}

button.addEventListener('click', changeSize)

createGrid(16, 16)
