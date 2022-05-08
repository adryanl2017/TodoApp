async function showItemsAsync() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const json = await response.json()

    for (var i = 0; i < json.length; i++) {
        const item = document.createElement('li')
        item.textContent = item.textContent + json[i].title
        container.append(item)
    }
}

const button = document.getElementById('todo-button')
const container = document.getElementById('todo-list-container')

button.addEventListener('click', showItemsAsync)


