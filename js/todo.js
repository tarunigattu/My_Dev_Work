function updateTaskStatus(){
	var cbID = this.id.replace("cb_","");
	var itemText = document.getElementById("item_"+cbID);
	if(this.checked){
		itemText.className = "checked";
	}else{
		itemText.className = "";
	}
}
function editTask(){
	var ebID = this.id.replace("eb_","");
	var taskbox = document.getElementById("taskbox");
	var itemText = document.getElementById("item_"+ebID);
	var newTaskText = prompt("what should this task be renamed to");
	if(!newTaskText || newTaskText == "" || newTaskText == " "){
		return false;
	}
	taskbox.value = "";
	itemText.innerText = newTaskText;
}
function deleteTask(){
	var dbID = this.id.replace("db_","");
	var taskbox = document.getElementById("taskbox");
	var itemText = document.getElementById("item_"+dbID);
	var editbtn = document.getElementById("eb_"+dbID);
	var deletebtn = document.getElementById("db_"+dbID);
	var liItem = document.getElementById("li_"+dbID);
	var checkboxItem = document.getElementById("cb_"+dbID);

	itemText.style.display = "none";
	editbtn.style.display = "none";
	deletebtn.style.display = "none";
	liItem.style.display = "none";
	checkboxItem.style.display = "none";
	taskbox.value = "";
}
function addnewtask(list,itemText){
	var date = new Date();
	var id = "" + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds();

	var listItem = document.createElement("li");
	listItem.id = "li_" + id;

	var checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.id = "cb_"+id;
	checkbox.onclick = updateTaskStatus;

	var span = document.createElement("span");
	span.id = "item_"+id;
	span.innerText = itemText;

	var editbutton = document.createElement("button");
	editbutton.id = "eb_"+id;
	editbutton.innerText = "Edit";
	editbutton.onclick = editTask;

	var deletebutton = document.createElement("button");
	deletebutton.id = "db_"+id;
	deletebutton.innerText = "Delete";
	deletebutton.onclick = deleteTask;

	listItem.appendChild(checkbox);
	listItem.appendChild(span);
	listItem.appendChild(editbutton);
	listItem.appendChild(deletebutton);
	list.appendChild(listItem);
}

var addtask = document.getElementById("btnAdd");
addtask.onclick = function(){
	var taskboxtext = document.getElementById("taskbox");
	var itemText = taskboxtext.value;
	if(itemText == "" || itemText ==" "){
		return false;
	}
	addnewtask(document.getElementById("todolist"),itemText);
	taskboxtext.focus();
	taskboxtext.value = "";
};