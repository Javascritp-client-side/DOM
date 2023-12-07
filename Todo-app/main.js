let input = document.getElementById("task-input")
console.log(input);
let save = document.getElementById('add-task')
let task_list = document.getElementById('task-list')
save.addEventListener('click',(e)=>{
    e.preventDefault()
    if(input.value === ""){
        alert("please input before save")
    }
    else{
        let new_task = document.createElement('li')
        
        new_task.id = 'task'
        new_task.textContent = input.value
        task_list.appendChild(new_task)
        input.value = ""

    }

})