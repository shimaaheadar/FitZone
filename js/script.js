// let inp = document.querySelector(".input");
// let creatBtn = document.querySelector(".btn");

// let tasks = document.querySelector(".tasks");

// let tasksArr = JSON.parse(localStorage.getItem("Tasks")) || [];

// function deleteTask(e) {
//   if (e.target.classList.contains("btn-danger")) {
//     let id = e.target.dataset.id;

//     e.target.parentElement.remove();

//     let taskArr = JSON.parse(localStorage.getItem("Tasks")) || [];

//     taskArr = taskArr.filter((item) => {
//       return item.id != id;
//     });

//     localStorage.setItem("Tasks", JSON.stringify(taskArr));
//   }
// }

// function addTask(Task) {
//   let task = document.createElement("div");
//   task.textContent = Task.title;

//   let delBtn = document.createElement("button");
//   delBtn.dataset.id = Task.id;

//   delBtn.classList = "btn btn-danger";

//   delBtn.textContent = "Delete";
//   task.appendChild(delBtn);

//   tasks.appendChild(task);
// }

// tasks.addEventListener("click", deleteTask);

// tasksArr.forEach((element) => {
//   addTask(element);
// });
// console.log(JSON.stringify([{ name: "shimaa" }]));

// creatBtn.addEventListener("click", function (e) {
//   e.preventDefault();
//   taskTitle = inp.value;
//   if (taskTitle.trim() !== "") {
//     let taskItem = {
//       id: Date.now(),
//       title: taskTitle,
//     };

//     let taskArr = JSON.parse(localStorage.getItem("Tasks")) || [];

//     taskArr.push(taskItem);

//     localStorage.setItem("Tasks", JSON.stringify(taskArr));

//     addTask(taskItem);

//     inp.value = "";
//   }
// });

let navBtn=document.getElementById("navBtn")
let nav=document.querySelector(".nav")

navBtn.addEventListener("click",()=>{
    nav.classList.toggle("hidden")
})

let sec1P1=document.querySelector(".sec1 .sec11")
let sec1P2=document.querySelector(".sec1 .part2")

window.addEventListener('DOMContentLoaded', () => {
    
    sec1P1.classList.remove('-translate-x-full', 'opacity-0');
    sec1P1.classList.add('translate-x-0', 'opacity-100');
    sec1P2.classList.remove('translate-x-full', 'opacity-0');
    sec1P2.classList.add('translate-x-0', 'opacity-100');
  });
