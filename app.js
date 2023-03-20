var taskList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < taskList.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u2716");
    span.className = "close";
    span.appendChild(txt);
    taskList[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

var i;
for (i = 0; i < taskList.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u2714");
    span.className = "done";
    span.appendChild(txt);
    taskList[i].appendChild(span);
}

var done = document.getElementsByClassName("done");
var i;
for (i = 0; i < done.length; i++) {
    done[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.className === 'done') {
        ev.target.style.display = "none";
        var newLi = document.createElement("li");
        var task = event.target.parentElement.firstChild.nodeValue;
        var taskText = document.createTextNode(task);
        newLi.appendChild(taskText);
        document.getElementById("list2").appendChild(newLi);

        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u2716");
        span.className = "close";
        span.appendChild(txt);
        newLi.appendChild(span);

        for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                var div = this.parentElement;
                div.style.display = "none";
            }
        }
    }
}, false);

function newElement() {
    var li = document.createElement("li");
    var input = document.getElementById("taskInput").value;
    var t = document.createTextNode(input);
    li.appendChild(t);
    if (input === '') {
        alert("The task should not be empty!");
    } else {
        document.getElementById("list1").appendChild(li);
    }
    document.getElementById("taskInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u2716");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

    var i;
    for (i = 0; i < taskList.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u2714");
        span.className = "done";
        span.appendChild(txt);
        taskList[i].appendChild(span);
    }

    var done = document.getElementsByClassName("done");
    var i;
    for (i = 0; i < done.length; i++) {
        done[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}