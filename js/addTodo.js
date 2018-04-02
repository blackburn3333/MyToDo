/**
 * Created by Burn's hand on 4/2/2018.
 */

var todo = JSON.parse(localStorage.getItem("todo")) || [];

var todoVals = [];
todoVals = JSON.parse(localStorage.getItem("todo"));

var base = document.getElementById("toDoListView");
var table = document.createElement("table");

table.setAttribute("class", "todoTable table");
for (var i = 0; i < todoVals.length; i++) {

    var row = document.createElement("tr");

    var cell = document.createElement("td");
    var celltwo = document.createElement("td");
    var cellthree = document.createElement("td");

    var ParaElement = document.createElement("p");
    var todoValu = document.createTextNode(todoVals[i].Name);

    ParaElement.appendChild(todoValu);

    var deleteTodo = document.createElement("span");
    deleteTodo.textContent = "clear";

    var CompleteTodo = document.createElement("span");
    CompleteTodo.textContent = "done";

    cell.appendChild(ParaElement);
    celltwo.appendChild(CompleteTodo);
    cellthree.appendChild(deleteTodo);

    row.appendChild(cell);
    row.appendChild(celltwo);
    row.appendChild(cellthree);

    ParaElement.setAttribute("id", "todoName"+i);
    deleteTodo.setAttribute("id", i);
    CompleteTodo.setAttribute("id", i);

    deleteTodo.setAttribute("onclick", "toDoRemove(this.id);");

    ParaElement.setAttribute("class", "todoName");
    cell.setAttribute("class", "maincell");
    deleteTodo.setAttribute("class", "material-icons deletespan");
    CompleteTodo.setAttribute("class", "material-icons deletespan");

    if (todoVals[i].Status == '1') {
        CompleteTodo.setAttribute("onclick", "toDoNotDOne(this.id,document.getElementById('todoName" + i + "').innerHTML);");
        ParaElement.setAttribute("style", "text-decoration:line-through;")
        CompleteTodo.setAttribute("style", "color: red;")
    } else {
        CompleteTodo.setAttribute("onclick", "toDoDOne(this.id,document.getElementById('todoName" + i + "').innerHTML);");
        ParaElement.setAttribute("style", "text-decoration: none;")
    }

    table.appendChild(row);
}
base.appendChild(table);

function addToDo(Activity) {
    todo.push({ Name: [Activity], Status: ['0'] });
    localStorage.setItem("todo", JSON.stringify(todo));
    location.reload();
}

function toDoRemove(toDoID) {
    todo.splice(toDoID,1);
    localStorage.setItem("todo", JSON.stringify(todo));
    location.reload();
}

function toDoDOne(toDoID, Activity) {
    console.log("id->"+toDoID, "activityID->"+Activity)
    todo.splice(toDoID, 1, { Name: [Activity], Status: ['1']});
    localStorage.setItem("todo", JSON.stringify(todo));
    location.reload();
}
function toDoNotDOne(toDoID, Activity) {
    console.log("id->" + toDoID, "activityID->" + Activity)
    todo.splice(toDoID, 1, { Name: [Activity], Status: ['0'] });
    localStorage.setItem("todo", JSON.stringify(todo));
    location.reload();
}
