// const num = prompt("Choose a number: 0 or 1");

// const keys = ["key0001", "key0002"];

// const urlCIK = `https://test-project-d14cc-default-rtdb.firebaseio.com/${keys[num]}.json`;

// fetch(urlCIK)
//     .then(response => response.json())
//     .then(data => console.log(data))

function getData() {
    fetch("https://test-project-d14cc-default-rtdb.firebaseio.com/tasks.json")
    .then(response => response.json())
    .then(data => {
        let taskArr = Object.values(data);
        for(let i=0; i<taskArr.length; i++) {
            console.log(taskArr[i].task);
            let li = document.createElement("li");
            li.className = "list-group-item";
            li.innerHTML = taskArr[i].task
            document.getElementById("task-list").append(li);
        }
    });
} 

getData()


document.getElementById("btn").addEventListener("click", () => {
   console.log(document.getElementById("task").value);
   let newTask = document.getElementById("task").value;
   axios.post('https://test-project-d14cc-default-rtdb.firebaseio.com/tasks.json', {
       task: newTask
   }).then(response => {
       console.log(response);
   });
   document.getElementById("task").value = "";

//Run getData() after submitting a new task - with an if statement checking...
//for tasks that already exist
    
});
