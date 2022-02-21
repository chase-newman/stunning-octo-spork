// const num = prompt("Choose a number: 0 or 1");

// const keys = ["key0001", "key0002"];

// const urlCIK = `https://test-project-d14cc-default-rtdb.firebaseio.com/${keys[num]}.json`;

// fetch(urlCIK)
//     .then(response => response.json())
//     .then(data => console.log(data))

fetch("https://test-project-d14cc-default-rtdb.firebaseio.com/task.json")
    .then(response => response.json())
    .then(data => console.log(data))



document.getElementById("btn").addEventListener("click", () => {
   console.log("Button clicked");
   console.log(document.getElementById("task").value);
   let newTask = document.getElementById("task").value;
   axios.post('https://test-project-d14cc-default-rtdb.firebaseio.com/tasks.json', {
       task: newTask
   }).then(response => {
       console.log(response);
   });
   document.getElementById("task").value = "";
   
});
