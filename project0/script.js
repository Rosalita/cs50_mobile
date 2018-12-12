const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let count = 0;

function newTodo() {

  const thingToDo = prompt("What would you like to do?", "something");

  if (thingToDo !== null && thingToDo !== "") {

    increment('item-count')
    increment('unchecked-count')

    const newElement = document.createElement('li');
    newElement.innerHTML = '<li>' + thingToDo + '<input type="checkbox" id="checkbox-' + count + '" onclick="boxClick(this)"></li>'
    list.appendChild(newElement);

    count++

  }
}

function boxClick(checkbox) {
  if (checkbox.checked === true) {
    decrement('unchecked-count')
  } else {
    increment('unchecked-count')
  }
}

function increment(elementId) {
  let total = document.getElementById(elementId).innerHTML
  total++
  document.getElementById(elementId).innerHTML = total
}

function decrement(elementId) {
  let total = document.getElementById(elementId).innerHTML
  total--
  document.getElementById(elementId).innerHTML = total
}