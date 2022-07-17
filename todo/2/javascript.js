const container = document.getElementById('container');
const inputField = document.getElementById('inputField');
const addBtn = document.getElementById('addBtn');
const clearBtn = document.getElementById('clearBtn');

var taskList = [];

function addItem(item){
  taskList.push(item);
  addFromArray();
  inputField.value = "";
  inputField.focus();
};

function removeItem(item){
  var itemIndex = taskList.indexOf(item);
  taskList.splice(itemIndex, 1);
};

function addFromArray () {
  var list = taskList[taskList.length-1];
  var paragraph = document.createElement('p');
  paragraph.textContent = list;
  container.appendChild(paragraph);
};

addBtn.addEventListener('click', () => {
  addItem(inputField.value);
  console.log(taskList);
});

clearBtn.addEventListener('click', () => {
  taskList = [];
  while (container.firstChild) {
    container.removeChild(container.firstChild);
		};
    console.log(taskList);
});