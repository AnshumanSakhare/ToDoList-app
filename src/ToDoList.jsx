import React, { usestate } from "react"

function ToDoList(){
    const {tasks,setTasks} = useState([]);
    const {newtask,setNewTask} = useState("");

    function handleInuputChange(event){
        setNewTask(event.target.value);

    }
    function addnewTask(){

    }

    function deleteTask(){

    }

    function moveTaskUP(){

    }

    function moveTaskDown(){

    }

}
return(
    <div>
        <h1 className="Title"> ToDoList </h1>
        <div className="container">
            <input type="text" placeholder="Enter your task" value={newtask} onChange={handleInuputChange}/>
            <button className="addTask" onClick={}></button>

        </div>
    </div>
)