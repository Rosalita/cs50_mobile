const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {

  console.log("***")
  console.log(this)

  // get user input for the todo item

  const thingToDo = prompt("What would you like to do?", "something");

  if (thingToDo !== null && thingToDo !== "") {

    document.getElementById('todo-list').innerHTML += ('<li>' +
      thingToDo + '<input type="checkbox" id="box" onclick="boxClick()"><li>');


  }
  // increase the item count
  //alert('New TODO button clicked!')
}


function boxClick() {
  console.log("item was clicked");
  if (document.getElementById('box').checked === true) {
    console.log("checked")
  } else {
    console.log("unchecked")
  }
}