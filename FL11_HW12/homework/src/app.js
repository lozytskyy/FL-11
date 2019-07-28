//const rootNode = document.getElementById('root');

const todoItems = [
    {isDone: false, id: 12345, description: 'Todo 1'}
];
let newItem;
let btnAdd = document.getElementById('addNew');
let btnCancel = document.getElementById('Cancel');
let btnCancel1 = document.getElementById('Cancel1');
let btnSave = document.getElementsByClassName('Save');
let a1 = document.getElementById('modify');
let parentElem = document.getElementById('root');
let div = document.createElement('div');

btnAdd.addEventListener('click', addNewTask);
btnCancel.addEventListener('click', cancelTask);
btnCancel1.addEventListener('click', cancelTask);

function addNewTask() {
	alert('Add - open page 2!');
}

function AddFun() {
	let text = document.getElementsByTagName('input')[0];
	let val = text.value;
	//back to page 1. Add New Task body->innerHTML
	appendCh(val);

	function appendCh(val) {
		newItem = newItem = document.createElement('div');
		newItem.className = 'itemsList';
		newItem.innerHTML = '<input type="checkbox"><p class="paragr" onclick="modify(this);">' 
		+ val + '</p><img src="assets/img/remove-s.jpg" onclick="hide(this);">';
		parentElem.appendChild(newItem);
	}
}

function modify(element1) {
	a1.value = element1.innerHTML;
}

function replace() { 
	//let replVal2 = document.getElementsByClassName('paragr');
	alert(a1.value);
	newItem.className = 'itemsList';
	newItem.innerHTML = '<input type="checkbox"><p class="paragr" onclick="modify(this);">' 
	+ a1.value + '</p><img src="assets/img/remove-s.jpg" onclick="hide(this);">';
	parentElem.appendChild(newItem);
}	

function cancelTask() {
	alert('Cancel - back to page 1!');
}

function hide(element){
	let parent = element.parentNode;
	parent.style.display = 'none';
}


