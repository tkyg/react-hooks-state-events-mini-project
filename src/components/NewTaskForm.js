import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const [text, setText] = useState('')
  const [category, setCategory] = useState('')
  const addNewTask = (e) => {
    e.preventDefault()
    onTaskFormSubmit({text, category})
  }

  return (
    <form 
      className="new-task-form"
      onSubmit={(e) => addNewTask(e)}
    >
      <label>
        Details
        <input 
          type="text" 
          name="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        >
          <option></option>
          {/* render <option> elements for each category here */}
          {categories.map(category => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
