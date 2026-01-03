import React, { useState } from "react"

function ToDoList(){
    const [tasks, setTasks] = useState(["Eat Breakfast" , "Walk the Dog" , "Go to Gym"]);
    const [newtask, setNewTask] = useState("");

    function handleInuputChange(event){
        setNewTask(event.target.value);
    }
    function addnewTask(){
        if(newtask.trim()!==("")){
            setTasks([...tasks, newtask]);
            setNewTask("");
        }
    }

    function deleteTask(index){
        const updatedtasks = tasks.filter((_,i)=>i!==index);
        setTasks(updatedtasks);

    }

    function moveTaskUp(index){
        if (index > 0) {
            const updatedtasks = [...tasks];
            [updatedtasks[index], updatedtasks[index-1]] = [updatedtasks[index-1], updatedtasks[index]];
            setTasks(updatedtasks);
        }
    }

    function moveTaskDown(index){
        if (index < tasks.length - 1) {
            const updatedtasks = [...tasks];
            [updatedtasks[index], updatedtasks[index+1]] = [updatedtasks[index+1], updatedtasks[index]];
            setTasks(updatedtasks);
        }
    }
    return(
    <div className="todolist">
        <h1 className="Title"> ToDoList </h1>
        <div className="container">
            <input type="text" placeholder="Enter your task" value={newtask} onChange={handleInuputChange}/>
            <button className="addTask" onClick={()=>addnewTask(newtask)}>Add Task</button>
        </div>
        <ol>
            {tasks.map((task,index) =>  <li key = {index}>
                                <div className="task-row">
                                    <span className="text">{task}</span>
                                    <span className="button-group">
                                        <button className="delete-button" onClick={()=>deleteTask(index)}>Delete Task</button>
                                        <button className="moveup-button" onClick={()=>moveTaskUp(index)}>Move Task Up</button>
                                        <button className="movedown-button" onClick={()=>moveTaskDown(index)}>Move Task Down</button>
                                    </span>
                                </div>
            </li>)}
        </ol>
    </div>
    )

}
export default ToDoList