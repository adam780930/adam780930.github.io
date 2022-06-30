const listConainer = document.getElementById('listContainer');
const inputField = document.getElementById('inputField');
const addBtn = document.getElementById('addBtn');
const deleteBtn = document.getElementById('deleteBtn');
const clearBtn = document.getElementById('clearBtn');

var toDoList = [];

function addItem(item) {
  toDoList.push(item);
  addFromArray();
  inputField.value = "";
};

inputField.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    if (inputField.value == "") {
      alert('Please enter an item');
    } else {
      addItem(inputField.value);
    }
  }
});

addBtn.addEventListener('click', () => {
  if (inputField.value == "") {
    alert('Please enter an item');
  } else {
    addItem(inputField.value);
  }
});

function addFromArray(item) {
  var opt = toDoList[toDoList.length - 1];
  var paragraph = document.createElement('p');
  var deleteBtn = document.createElement('button');
  var itemIndex = toDoList.length == 0 ? 0 : toDoList.length - 1;
  paragraph.textContent = opt;
  paragraph.value = opt;
  deleteBtn.innerText = "Delete";
  deleteBtn.setAttribute('id', itemIndex);
  deleteBtn.classList.add('delete');
  listConainer.appendChild(paragraph);
  listConainer.appendChild(deleteBtn);


  deleteBtn.addEventListener('click', (event) => {
    toDoList.splice(itemIndex, 1);
    listConainer.removeChild(paragraph);
    listConainer.removeChild(deleteBtn);
  });
};

clearBtn.addEventListener('click', () => {
  toDoList = [];
  while (listConainer.firstChild) {
    listConainer.removeChild(listConainer.firstChild);
  };
});


















































// const addToDoButton = document.getElementById('addToDo');
// const toDoContainer = document.getElementById('toDoContainer');
// const inputField = document.getElementById('inputField');
// const deleteBtn = document.getElementById('delete');


// inputField.addEventListener('keypress', (e) => {
//     if (e.keyCode == 13 && inputField.value == "") {
//         alert('Please enter a task');
//     } else if (e.keyCode == 13) {
//         updateList();
//         // createDelete();
//     }
// });

// addToDoButton.addEventListener('click', () => {
//     if (inputField.value == "") {
//         alert('Please enter a task');
//     } else {
//         updateList();
//         // createDelete();
//     }
// });

// function updateList() {
//     var paragraph = document.createElement('p');
//     paragraph.classList.add('paragraph-styling');
//     paragraph.innerText = inputField.value;
//     toDoContainer.appendChild(paragraph);


//     inputField.value = "";
//     paragraph.addEventListener('click', () => {
//         paragraph.style.textDecoration = "line-through";
//     });
//     paragraph.addEventListener('dblclick', () => {
//         toDoContainer.removeChild(paragraph);
//     });
// };

// function createDelete() {
//     const createDeleteBtn = document.createElement('button');
//     createDeleteBtn.classList.add('delete');
//     createDeleteBtn.setAttribute("id", "delete");
//     createDeleteBtn.innerHTML = 'Delete';
//     toDoContainer.appendChild(createDeleteBtn);
// };

