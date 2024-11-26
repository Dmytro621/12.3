
let addButton = document.getElementById('button-add')
let list = document.querySelector('ul')
let addValue = document.querySelector('.add-list input')

addButton.addEventListener('click', () => {
    add()
})

addValue.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
    add()
    }
})

function add() {
        let newList = document.createElement('li')
        let newBox = document.createElement('div')
        let remove = document.createElement('button')
        newList.textContent = addValue.value
        remove.textContent = 'Видалити'

        list.appendChild(newBox);
        newBox.appendChild(newList)
        newBox.appendChild(remove)

        addValue.value = '';
}

      list.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
          event.target.parentElement.remove(); // Видаляємо батьківський елемент (div) кнопки
        }
      });
