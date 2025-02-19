import React, { useState, useContext } from 'react'
import { TaskContext } from '../App';
function NewTask() {
    const { handleAddTask, handleDeleteTask } = useContext(TaskContext);
    const [enteredTask, setEnteredTask] = useState('');


    function handleChange(event){
        setEnteredTask(event.target.value);
    }
    function handleClick(){
        if(enteredTask === '')return;
        setEnteredTask('');
        handleAddTask(enteredTask);
    }
  return (
    <div className='flex items-center py-2'>
        <input type="text" 
        onChange={handleChange}
        value={enteredTask}
        className='bg-stone-300w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600 w-[70%]'/>
        <button 
        onClick={handleClick}
        className='ml-auto bg-stone-500 text-stone-50 py-1 px-3 rounded-sm hover:bg-stone-700'>Add Task</button>
    </div>
  )
}

export default NewTask