const button = document.getElementById('todo-button')
const container = document.getElementById('todo-list-container')

button.addEventListener('click', showItems)

function showItems() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => {

            console.log(json)
            const item = document.createElement('li')
            item.textContent = json.title

            container.append(item)

        })
}
