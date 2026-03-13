
// CLOCK

function updateTime(){

let now = new Date()

document.getElementById("time").innerText =
now.toLocaleTimeString()

document.getElementById("date").innerText =
now.toDateString()

let hour = now.getHours()

let greeting = "Hello"

if(hour < 12) greeting = "Good Morning"
else if(hour < 18) greeting = "Good Afternoon"
else greeting = "Good Evening"

document.getElementById("greeting").innerText = greeting
}

setInterval(updateTime,1000)



// TIMER

let time = 1500
let interval

function updateTimer(){

let minutes = Math.floor(time/60)
let seconds = time%60

document.getElementById("timer").innerText =
`${minutes}:${seconds.toString().padStart(2,'0')}`

}

function startTimer(){

interval = setInterval(()=>{
time--
updateTimer()

if(time <= 0) clearInterval(interval)

},1000)

}

function stopTimer(){
clearInterval(interval)
}

function resetTimer(){
time = 1500
updateTimer()
}

updateTimer()



// TASK LIST

let tasks = JSON.parse(localStorage.getItem("tasks")) || []

function saveTasks(){
localStorage.setItem("tasks",JSON.stringify(tasks))
}

function renderTasks(){

let list = document.getElementById("taskList")
list.innerHTML=""

tasks.forEach((task,i)=>{

let li = document.createElement("li")

li.innerHTML = `
<span onclick="toggleTask(${i})"
style="text-decoration:${task.done?'line-through':'none'}">
${task.text}
</span>

<button onclick="deleteTask(${i})">Delete</button>
`

list.appendChild(li)

})

}

function addTask(){

let input = document.getElementById("taskInput")

if(input.value === "") return

tasks.push({text:input.value,done:false})

input.value=""

saveTasks()
renderTasks()
}

function toggleTask(i){

tasks[i].done = !tasks[i].done

saveTasks()
renderTasks()

}

function deleteTask(i){

tasks.splice(i,1)

saveTasks()
renderTasks()

}

renderTasks()



// QUICK LINKS

let links = JSON.parse(localStorage.getItem("links")) || []

function saveLinks(){
localStorage.setItem("links",JSON.stringify(links))
}

function renderLinks(){

let container = document.getElementById("links")

container.innerHTML=""

links.forEach(link=>{

let a = document.createElement("a")

a.href = link.url
a.innerText = link.name
a.target="_blank"

container.appendChild(a)

})

}

function addLink(){

let name = document.getElementById("linkName").value
let url = document.getElementById("linkURL").value

if(name=="" || url=="") return

links.push({name,url})

saveLinks()
renderLinks()

}

renderLinks()