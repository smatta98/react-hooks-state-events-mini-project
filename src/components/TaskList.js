import React, {useState} from "react";
import Task from "./Task";

function TaskList({tasksToDisplay, handleDelete}) {



  const taskList = tasksToDisplay.map(task => 
    <Task key = {task.text} category = {task.category} text = {task.text} handleDelete = {handleDelete}/> 
  )


  
  return ( 
     <div className="tasks">
      {taskList}
</div>
  )
}

export default TaskList;


// First, we'll want to display all the tasks in our app. 
// Pass down the task data from App to TaskList, and display each task using the Task component. Make sure to use a key prop!