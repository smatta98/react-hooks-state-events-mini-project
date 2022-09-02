import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState("All")
  const [categoriesList, setCategoriesList] = useState(CATEGORIES)
  

  

  function handleTasks(newTask){
    setTasks([...tasks,newTask])
  }

 const visibleTasks = tasks.filter(task => category === 'All' || category === task.category)
 console.log(visibleTasks)

function handleDelete(delTasks){
  const deleteTask = tasks.filter(task => task.text != delTasks)
  setTasks(deleteTask)
}


function handleButton(event){
  const buttonClass = document.querySelectorAll('button')
  console.log(buttonClass)
  buttonClass.forEach(button => {
    if (event.target.innerText === button.innerText){
      event.target.className = 'selected'
    } else {
      button.className = ''
    }
  })
  
  setCategory(event.target.innerText)
  
}




  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
      categoriesToDisplay = {categoriesList} testButton = {handleButton}/> 
      <NewTaskForm categoryList = {categoriesList} onTaskFormSubmit = {handleTasks}/>
      <TaskList tasksToDisplay = {visibleTasks} handleDelete = {handleDelete}/>
    </div>
  );
}

export default App;
