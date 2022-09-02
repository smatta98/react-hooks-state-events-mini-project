import React, {useState}from "react";

function NewTaskForm({categoryList, onTaskFormSubmit}) {

  const [inputTask, setInputTask] = useState('')
  const [cat, setCat] = useState('Code')
 
 

  function inputTasks(event) {
    setInputTask(event.target.value)
  }

  function handleCat(event){
    setCat(event.target.value)
  }


  const catFilter= categoryList.filter(category => {
    if (category !== 'All') {
      return category
  } 
})

const catDisplay = catFilter.map(category => 
  <option key = {category}>{category}</option>
  )

  const newItem = {
    text: inputTask,
    category: cat
  }

  

  function handleSubmit (event){
  event.preventDefault(); 
  onTaskFormSubmit(newItem)
  console.log(event.target)
  }




    

  return (
    <form onSubmit = {handleSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" onChange={inputTasks} value = {inputTask}/>
      </label>
      <label>
        Category
        <select name="category"  onChange = {handleCat} value = {cat}>
          {catDisplay}
        </select>
      </label>
      <input onChange = {inputTasks} type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;


// Pass the list of categories to this component from App. 
// Then, update this component to display <option> elements for each category inside of the <select> element except the "All" category, 
// so that the user can select a category when adding a new task.

// Next, update this form to be a controlled component, so that all form inputs are captured in state.
// When the form is submitted, add a new task to the list with the text and category from the form. 
// For the tests for this feature to pass, you'll need a callback prop named onTaskFormSubmit that takes a task object as an argument.