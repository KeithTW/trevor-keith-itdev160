var tasks = [];

function Task(task, tAdded, tDue) {
    this.task = task;
    this.timeAdded = tAdded;
    this.timeDue = tDue;

}

function AddTask() {
    var tsk = document.getElementById("task-input").value;
    if(tsk.length != 0) {
        var tskAddDT = Date.toLocaleString();
        var tskDueDT = document.getElementById("date-input").value;

        console.log(tskDueDT);

        var tskNew = new Task(tsk, tskAddDT, tskDueDT);

        tasks.push(tskNew);

        GenerateTaskList();

    }

}

function RemoveTask(rmvNdx) {
    tasks.splice(rmvNdx, 1);

    GenerateTaskList();

}

function GenerateTaskList() {
    var tskEle = document.getElementById("tasks");

    tskEle.innerHTML = "";

    for(var i = 0; i < tasks.length; i++) {
        tskEle.innerHTML += GenerateTaskElement(tasks[i], i);

    }

}

function GenerateTaskElement(task, ndx) {
    var ele = "";

    ele += "<div class=\"tasks-outer\" "
    ele += "onClick=RemoveTask(" + ndx + ")>"
    ele += "<h1 ";
    ele += "class=\"tasks\" ";
    ele += "id=\"task" + ndx + "\" ";
    ele += ">";
    ele += task.task;
    ele += "</h1>";

    ele += "<p ";
    ele += "class=\"date\" ";
    ele += "id=\"task" + ndx + "\"";
    ele += ">";
    ele += task.timeDue;
    ele += "</p>";

    ele += "</div>";

    return ele;

}