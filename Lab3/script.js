
document.getElementById('add_task').addEventListener("click", function(){
    let inputText = document.getElementById('input_task').value;

    if(inputText){
        console.log(inputText);

        let li = document.createElement("li");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("done_task");

        let label = document.createElement("label");
        label.textContent = inputText;

        let img = document.createElement("img");
        img.src = "backet.svg";
        img.alt = "Delete";
        img.classList.add("delete_task");

        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(img);

        document.getElementById('todolist').appendChild(li);
        
        
        document.getElementById('input_task').value = '';

        img.addEventListener("click", function(){
            let taskItem = img.parentElement;
            taskItem.remove();
        });
    }else{
        alert("Please, enter the task :)");
    }


});






// function loadTasks(){
//     const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     tasks.forEach(task => {
//         addTaskToList(task.text, task.checked);
//     });
// }


// function addTaskToList(taskText, isChecked){
//     let li = document.createElement("li");

//     let checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     checkbox.checked = isChecked;
//     checkbox.classList.add("done_task");

//     let label = document.createElement("label");
//     label.textContent = taskText;

//     let backet = document.createElement("img");
//     backet.src="backet.svg";
//     backet.classList.add("delete_task");

//     li.appendChild(checkbox);
//     li.appendChild(label);
//     li.appendChild(backet);

//     document.getElementById("todolist").appendChild(li);

//     backet.addEventListener("click", function(){
//         li.remove();
//         saveTasks();
//     });

//     checkbox.addEventListener("click", saveTasks);
// }

// function saveTasks(){
//     let tasks = [];
//     let taskItem = document.querySelectorAll("#todolist li");
//     taskItem.forEach(function(item){
//         let taskText = item.querySelector("label").textContent;
//         let isChecked = item.querySelector("input[type='checkbox']").checked;
//         tasks.push({text: taskText, checked: isChecked  });
//     });

//     localStorage.setItem("tasks", JSON.stringify(tasks)); //СОхраням наши задачи в локальное хранилище
// }


// document.getElementById('add_task').addEventListener("click", function(){
//     let inputText = document.getElementById('input_task').value;
//     if(inputText){
//         addTaskToList(inputText, false);
//         saveTasks();
//         document.getElementById('input_task').value = '';
//     }else{
//         alert("Please, enter the task ^^) ");
//     }
// });

// window.addEventListener("load", loadTasks);